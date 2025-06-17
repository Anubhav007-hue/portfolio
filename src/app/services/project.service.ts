import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Project } from "../models/projects.model";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private baseUrl = environment.apiBaseUrl;
  private apiUrl = '/api/user-projects';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}${this.apiUrl}`);
  }
}
