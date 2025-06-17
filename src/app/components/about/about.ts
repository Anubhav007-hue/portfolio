import { Component,Input } from '@angular/core';
import { UserProfile } from '../../models/user-profile.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  @Input() profile: UserProfile | null = null;
}
