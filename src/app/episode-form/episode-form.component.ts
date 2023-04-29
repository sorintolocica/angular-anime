import {Component, OnInit} from '@angular/core';
import { episode } from '../models/episode';
import { EpisodeService } from '../services/episode.service';
import {anime} from "../models/anime";
import {AnimeService} from "../services/anime.service";
@Component({
  selector: 'app-episode-form',
  templateUrl: './episode-form.component.html',
  styleUrls: ['./episode-form.component.css']
})
export class EpisodeFormComponent implements OnInit {
  episode: episode = new episode();
  animeList: anime[] = [];

  constructor(private episodeService: EpisodeService, private animeService: AnimeService) {
  }

  ngOnInit() {
    this.getAnimeList();
  }

  getAnimeList() {
    this.animeService.getAnimes().subscribe((data: anime[]) => {
      this.animeList = data;
      console.log('animeList:', this.animeList);
    });
  }

  onAnimeSelect() {
    console.log('episode.animeId:', this.episode.animeId);
  }

  onSubmit() {
    console.log('Episod înainte de a fi trimis:', this.episode);
    this.episodeService.createEpisode(this.episode).subscribe(() => {
      console.log('Episodul a fost adăugat cu succes');
    });
  }
}
