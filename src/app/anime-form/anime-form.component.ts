import { Component } from '@angular/core';
import { anime } from '../models/anime';
import { AnimeService } from '../services/anime.service';

@Component({
  selector: 'app-anime-form',
  templateUrl: './anime-form.component.html',
  styleUrls: ['./anime-form.component.css']
})
export class AnimeFormComponent {
  anime: anime = new anime();

  constructor(private animeService: AnimeService) { }

  onSubmit() {
    this.animeService.createAnime(this.anime).subscribe(() => {
      console.log('Anime-ul a fost adaugat cu succes!');
    });
  }
}
