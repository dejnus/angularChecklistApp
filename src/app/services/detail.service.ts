import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Detail } from '../interfaces/Detail';
import { Project } from '../interfaces/Project';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  private apiUrl = 'http://localhost:5000/details';

  constructor(private http:HttpClient) { }

  getDetails(): Observable<Detail[]> {
    return this.http.get<Detail[]>(this.apiUrl);
  }
  getDetailsForProject(parentId: number): Observable<Detail[]> {
    const url = `${this.apiUrl}?parentId=${parentId}`;
    return this.http.get<Detail[]>(url);
  }
  addDetail(detail: Detail): Observable<Detail>{
    return this.http.post<Detail>(this.apiUrl, detail, httpOptions);
  }
  deleteDetail(detail: Detail): Observable<Detail>{
    const url = `${this.apiUrl}/${detail.id}`;
    return this.http.delete<Detail>(url);
  }
}
