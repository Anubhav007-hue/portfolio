import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { UserProfile } from '../../models/user-profile.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  @Input() profile: UserProfile | null = null;
  @Output() navClick = new EventEmitter<string>();

  activeSection: string = '';

  onNavClick(section: string) {
    this.navClick.emit(section);
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const sections = document.querySelectorAll('section');
    let scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const offsetTop = section.offsetTop;
      const offsetHeight = section.offsetHeight;

      if (scrollPosition >= offsetTop - offsetHeight / 3) {
        this.activeSection = section.getAttribute('id') || '';
      }
    });
  }
}
