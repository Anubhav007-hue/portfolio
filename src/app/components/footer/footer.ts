import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserProfile } from '../../models/user-profile.model';
import { CommonModule } from '@angular/common';

interface SocialLink {
  url: string;
  icon: string;
  alt: string;
}

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {

  private _userProfile?: UserProfile;

  @Input() set userProfile(value: UserProfile | undefined) {
    this._userProfile = value;
    if (this._userProfile) {
      this.socialLinks = [
        { 
          url: this._userProfile.github || 'https://github.com/yourprofile', 
          icon: '/icons/github.svg', 
          alt: 'GitHub' 
        },
        { 
          url: this._userProfile.linkedin || 'https://linkedin.com/in/yourprofile', 
          icon: '/icons/linkedin.svg', 
          alt: 'LinkedIn'
        }
        ,
        { 
          url: this._userProfile.twitter || 'https://twitter.com/in/yourprofile', 
          icon: '/icons/twitter.svg', 
          alt: 'Twitter'
        }
        ,
        { 
          url: this._userProfile.instagram || 'https://twitter.com/in/yourprofile', 
          icon: '/icons/insatgram.svg', 
          alt: 'Instagram'
        }
      ];
    }
  }

  socialLinks: SocialLink[] = [];
}

