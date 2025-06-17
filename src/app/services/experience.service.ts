import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Experience } from "../models/experience.model";
import { environment } from "../../environments/environment";



@Injectable({
    providedIn: 'root'
})

export class ExperienceService{
    private baseUrl = environment.apiBaseUrl;
    private apiUrl = '/api/user-experience';
    constructor(private http : HttpClient){}

    getExperience(): Observable<Experience[]>{
        return this.http.get<Experience[]>(`${this.baseUrl}${this.apiUrl}`);
    }
}