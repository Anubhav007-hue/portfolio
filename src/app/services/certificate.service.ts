import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Certificate } from "../models/certificate.model";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  private baseUrl = environment.apiBaseUrl;
  private apiUrl = '/api/user-certificate';

  constructor(private http: HttpClient) {}

  getCertificate(): Observable<Certificate[]> {
    // Use baseUrl + apiUrl to form full endpoint URL
    return this.http.get<Certificate[]>(`${this.baseUrl}${this.apiUrl}`);
  }
}
