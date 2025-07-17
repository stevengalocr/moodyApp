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
  selectedEmotion: string = '';
  currentPlaces: Place[] = [];
  emotions = placesData;

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
}
