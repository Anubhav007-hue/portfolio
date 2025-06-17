import { Component, Input } from '@angular/core';
import { Project } from '../../models/projects.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
  @Input() projects: Project[] = [];

  openProject(event: MouseEvent, link: string): void {
  if (link) {
    // Create a cracker effect element
    const cracker = document.createElement('div');
    cracker.classList.add('cracker-effect');

    // Position the cracker at the click point
    cracker.style.left = `${event.clientX}px`;
    cracker.style.top = `${event.clientY}px`;
    document.body.appendChild(cracker);

    // Remove cracker after animation and redirect
    setTimeout(() => {
      cracker.remove();
      window.open(link, '_blank'); // Redirects after animation
    }, 500); // 0.5s matches the CSS animation duration
  }
}


  
}
