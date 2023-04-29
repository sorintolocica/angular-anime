import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { anime } from '../models/anime';
@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private apiUrl = 'https://localhost:7293/api/Anime';

  constructor(private http: HttpClient) { }

  getAnimes(): Observable<anime[]> {
    return this.http.get<anime[]>(this.apiUrl);
  }

  getAnimeById(id: number): Observable<anime> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<anime>(url);
  }

  createAnime(anime: anime): Observable<anime> {
    return this.http.post<anime>(this.apiUrl, anime);
  }

  updateAnime(id: number, anime: anime): Observable<anime> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<anime>(url, anime);
  }

  deleteAnime(id: number): Observable<anime> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<anime>(url);
  }
}
