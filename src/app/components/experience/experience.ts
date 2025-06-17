import { Component,Input } from '@angular/core';
import { Experience } from '../../models/experience.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class ExperienceComponent {
  @Input() experiences : Experience[]  = [];
}
