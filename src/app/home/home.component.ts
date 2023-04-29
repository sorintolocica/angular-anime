import {Component, OnInit} from '@angular/core';
import {anime} from "../models/anime";
import {AnimeService} from "../services/anime.service";
import {episode} from "../models/episode";
import {EpisodeService} from "../services/episode.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  animeList: anime[] = [];
  episodeList: episode[] = [];

  constructor(private animeService: AnimeService, private episodeService: EpisodeService) { }

  ngOnInit() {
    this.getAnimeList();
    this.getEpisodeList();
  }

  getAnimeList() {
    this.animeService.getAnimes().subscribe((data: anime[]) => {
      this.animeList = data;
    });
  }

  getEpisodeList() {
    this.episodeService.getEpisodes().subscribe((data: episode[]) => {
      this.episodeList = data;
    });
  }

  getAnimeById(id: number): anime | undefined{
    return this.animeList.find(a => a.id === id);
  }

}
