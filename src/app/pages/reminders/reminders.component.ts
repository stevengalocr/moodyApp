import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { REMINDERS } from '../../data/reminders.data';

@Component({
  selector: 'app-reminders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent {
  currentReminders = REMINDERS.reminders;
}
