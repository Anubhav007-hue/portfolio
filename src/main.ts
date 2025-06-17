import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { App } from './app/app';
import 'zone.js';

bootstrapApplication(App, {
  providers: [
    provideHttpClient() // Add this
  ]
})
.catch(err => console.error(err));