import { anime } from './anime';
export class episode {
  id: number;
  title: string;
  episodeNumber: number;
  videoUrl: string;
  animeId?: number;
  anime?: anime;

  constructor() {
    this.id = 0;
    this.title = '';
    this.episodeNumber = 0;
    this.videoUrl = '';
  }
}

