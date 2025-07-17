import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EMOTION_TIPS } from '../../data/tips.data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tips',
  standalone: true,
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class TipsComponent {
  selectedEmotion: string = '';
  emotions = EMOTION_TIPS;
  currentTips: any[] = [];

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      const emotion = params['emotion'];
      if (emotion) {
        this.selectEmotion(emotion);
      }
    });
  }

  selectEmotion(emotion: string) {
    this.selectedEmotion = emotion;
    this.currentTips = this.emotions.find(e => e.name === emotion)?.tips || [];
  }
}
