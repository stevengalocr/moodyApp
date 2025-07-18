import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { placesData, Place, PlaceLink, Emotion } from '../../data/places.data';

@Component({
  selector: 'app-places',
  standalone: true,
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class PlacesComponent {
  selectedPlace: Place | null = null;

  // ...
  /** Agrupa lugares cercanos en clusters para evitar solapamiento visual de caritas en el mapa. */
  public getClusteredPlaces(): { places: Place[]; x: number; y: number }[] {
    const places = this.selectedEmotion ? this.currentPlaces : this.allPlaces;
    const clusters: { places: Place[]; x: number; y: number }[] = [];
    const threshold = 32; // px en espacio SVG (ajustable)
    places.forEach(place => {
      if (place.latitude == null || place.longitude == null) return;
      const x = this.placeToSvgX(place);
      const y = this.placeToSvgY(place);
      let found = clusters.find(cluster => {
        const dx = cluster.x - x;
        const dy = cluster.y - y;
        return Math.sqrt(dx * dx + dy * dy) < threshold;
      });
      if (found) {
        found.places.push(place);
      } else {
        clusters.push({ places: [place], x, y });
      }
    });
    return clusters;
  }

  /** Calcula el offset visual para cada carita dentro de un cluster */
  public getClusterOffset(cluster: { places: Place[]; x: number; y: number }, i: number): { x: number; y: number } {
    const n = cluster.places.length;
    if (n === 1) return { x: 0, y: 0 };
    const radius = 28; // px, radio de dispersión (ajustado para caritas grandes)
    const angle = (2 * Math.PI * i) / n;
    return {
      x: Math.round(Math.cos(angle) * radius),
      y: Math.round(Math.sin(angle) * radius)
    };
  }

  /** Devuelve una clase de offset para SCSS si se desea variar el estilo */
  public getClusterOffsetClass(i: number): string {
    return `offset-${(i % 4) + 1}`;
  }

  selectedEmotion: string = '';
  currentPlaces: Place[] = [];
  emotions = placesData;

  // Devuelve la ruta de la carita PNG para la emoción
  getEmotionFacePath(emotionName: string): string {
    switch (emotionName.toLowerCase()) {
      case 'triste': return 'assets/caras/triste-cara.png';
      case 'preocupado': return 'assets/caras/preocupado-cara.png';
      case 'feliz': return 'assets/caras/feliz-cara.png';
      case 'estresado': return 'assets/caras/estresado-cara.png';
      case 'enojado': return 'assets/caras/enojado-cara.png';
      case 'ansioso': return 'assets/caras/ansioso-cara.png';
      default: return 'assets/caras/feliz-cara.png';
    }
  }

  // Getter para todos los lugares (para el mapa)
  get allPlaces(): Place[] {
    return this.emotions.reduce((acc, e) => acc.concat(e.places), [] as Place[]);
  }

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      const emotion = params['emotion'];
      if (emotion) {
        this.selectEmotion(emotion);
      }
    });
  }

  selectEmotion(emotion: string): void {
    this.selectedEmotion = emotion;
    this.currentPlaces = this.emotions.find(e => e.name === emotion)?.places || [];
  }

  // Mapea lat/lon a coordenadas SVG (ajustar según el SVG)
  placeToSvgX(place: Place): number {
    // Costa Rica approx: Lon -86.0 (Oeste) a -82.5 (Este)
    const minLon = -86.0, maxLon = -82.5;
    const svgWidth = 764.4043;
    const margin = 0.05 * svgWidth; // 5% de margen
    if (place.longitude === undefined) return margin;
    const x = ((place.longitude - minLon) / (maxLon - minLon)) * (svgWidth - 2 * margin) + margin;
    return x;
  }

  placeToSvgY(place: Place): number {
    // Costa Rica approx: Lat 8.0 (Sur) a 11.25 (Norte)
    const minLat = 8.0, maxLat = 11.25;
    const svgHeight = 695.8172;
    const margin = 0.05 * svgHeight; // 5% de margen
    if (place.latitude === undefined) return margin;
    // SVG Y aumenta hacia abajo, latitud aumenta hacia arriba
    const y = svgHeight - (((place.latitude - minLat) / (maxLat - minLat)) * (svgHeight - 2 * margin) + margin);
    return y;
  }

  // Obtiene el nombre de la emoción para un lugar
  getEmotionForPlace(place: Place): string {
    for (const emotion of this.emotions) {
      if (emotion.places.includes(place)) {
        return emotion.name.toLowerCase();
      }
    }
    return '';
  }
}

