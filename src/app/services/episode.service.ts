import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { episode } from '../models/episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  private apiUrl = 'https://localhost:7293/api/Episode';

  constructor(private http: HttpClient) { }

  getEpisodes(): Observable<episode[]> {
    return this.http.get<episode[]>(this.apiUrl);
  }

  getEpisodeById(id: number): Observable<episode> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<episode>(url);
  }

  createEpisode(episode: episode): Observable<episode> {
    return this.http.post<episode>(this.apiUrl, episode);
  }

  updateEpisode(id: number, episode: episode): Observable<episode> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<episode>(url, episode);
  }

  deleteEpisode(id: number): Observable<episode> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<episode>(url);
  }
}
