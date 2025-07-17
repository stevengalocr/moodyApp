import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-conocenos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './conocenos.component.html',
  styleUrls: ['./conocenos.component.scss']
})
export class ConocenosComponent {
  goToTips(): void {
    window.location.href = '/tips?estado=feliz';
  }
}
