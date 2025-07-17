import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as confetti from 'canvas-confetti';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit, OnDestroy {
  formData = {
    name: '',
    description: '',
    rating: 0
  };

  stars = [1, 2, 3, 4, 5];
  showSuccess = false;
  showForm = true;
  private confettiCanvas: HTMLCanvasElement | null = null;
  private animationTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    // Inicializar el canvas para el confeti
    const canvas = document.createElement('canvas');
    canvas.id = 'confetti-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0';
    canvas.style.transition = 'opacity 0.3s ease';
    document.body.appendChild(canvas);
    this.confettiCanvas = canvas;
  }

  ngOnDestroy() {
    // Limpiar el canvas cuando el componente se destruya
    if (this.confettiCanvas) {
      document.body.removeChild(this.confettiCanvas);
      this.confettiCanvas = null;
    }
  }

  setRating(rating: number): void {
    this.formData.rating = rating;
  }

  onConocenos(): void {
    this.router.navigate(['conocenos']);
  }

  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  onSubmit(): void {
    if (this.formData.rating === 0) {
      return;
    }

    // Reset form
    this.formData = {
      name: '',
      description: '',
      rating: 0
    };
    
    // Mostrar animación de éxito
    this.showForm = false;
    this.showSuccess = true;

    // Lanzar confeti
    this.launchConfetti();
    
    // Resetear después de 3 segundos
    this.animationTimeout = setTimeout(() => {
      this.showForm = true;
      this.showSuccess = false;
    }, 3000);
  }

  private launchConfetti(): void {
    if (!this.confettiCanvas) return;

    this.confettiCanvas.style.opacity = '1';

    confetti.create(this.confettiCanvas, {
      resize: true,
      useWorker: true
    })({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: [
        '#596DDB',
        '#8194FF',
        '#B2C1FF',
        '#DBE3FE'
      ]
    });

    // Ocultar el canvas después de 3 segundos
    setTimeout(() => {
      if (this.confettiCanvas) {
        this.confettiCanvas.style.opacity = '0';
      }
    }, 3000);
  }
}