import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Project } from '../interfaces/Project';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = 'http://localhost:5000/projects';

  constructor(private http:HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }
  getProject(id: number): Observable<Project> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Project>(url);
  }
  deleteProject(project: Project): Observable<Project>{
    const url = `${this.apiUrl}/${project.id}`;
    return this.http.delete<Project>(url);
  }
  addProject(project: Project): Observable<Project>{
    return this.http.post<Project>(this.apiUrl, project, httpOptions);
  }
}
