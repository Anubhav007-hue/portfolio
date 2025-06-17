import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserProfile } from "../models/user-profile.model";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private baseUrl = environment.apiBaseUrl;
  private apiUrl = '/api/user-profile';

  constructor(private http: HttpClient) { }

  getUserProfile(): Observable<UserProfile> {
    const fullUrl = `${this.baseUrl}${this.apiUrl}/1`;
    console.log("Calling API:", fullUrl);
    return this.http.get<UserProfile>(fullUrl);
  }
}
