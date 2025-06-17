import { Component, Input } from '@angular/core';
import { Certificate } from '../../models/certificate.model';
import { CommonModule } from '@angular/common';
import { UserProfile } from '../../models/user-profile.model';


@Component({
  selector: 'app-certificate',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './certificate.html',
  styleUrl: './certificate.css'
})
export class CertificateComponent {
  @Input() certificate : Certificate[]  = [];
  @Input() userProfile : UserProfile | null = null;


  openProject(link: string): void {
    if (link) {
      window.open(link, '_blank'); // Opens the project link in a new tab
    }
  }
}


