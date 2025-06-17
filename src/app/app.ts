import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileService } from './services/profile.service';
import { ExperienceService } from './services/experience.service';
import { ProjectsService } from './services/project.service';
import { CertificateService } from './services/certificate.service';
import { UserProfile } from './models/user-profile.model';
import { Experience } from './models/experience.model';
import { Project } from './models/projects.model';
import { Certificate } from './models/certificate.model';

// Components
import { HeaderComponent } from './components/header/header';
import { AboutComponent } from './components/about/about';
import { ExperienceComponent } from './components/experience/experience';
import { ProjectsComponent } from './components/projects/projects';
import { FooterComponent } from './components/footer/footer';
import { CertificateComponent } from './components/certificate/certificate';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    FooterComponent,
    CertificateComponent,
    NgIf
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  private profileService = inject(UserProfileService);
  private experienceService = inject(ExperienceService);
  private projectsService = inject(ProjectsService);
  private certificateService = inject(CertificateService);

  profile: UserProfile | null = null;
  experiences: Experience[] = [];
  projects: Project[] = [];
  currentYear = new Date().getFullYear();
  certificate: Certificate[] = [];
  isLoading = true;

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit(): void {
    document.addEventListener("mousemove", (event) => {
      const glow = document.getElementById("cursor-glow");
      if (glow) {
        glow.style.top = `${event.clientY}px`;
        glow.style.left = `${event.clientX}px`;
      }
    });
  }

  loadData(): void {
    Promise.all([
      this.profileService.getUserProfile().toPromise(),
      this.experienceService.getExperience().toPromise(),
      this.projectsService.getProjects().toPromise(),
      this.certificateService.getCertificate().toPromise()
    ]).then(([profile, experiences, projects,certificate]) => {
      this.profile = profile ?? null;
      this.experiences = experiences ?? [];
      this.projects = projects ?? [];
      this.certificate = certificate ?? [];
      this.isLoading = false;
    }).catch(err => {
      console.error('Error loading data:', err);
      this.isLoading = false;
    });
  }

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}

