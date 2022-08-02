import { makeAutoObservable } from 'mobx';

import videosService from '../services/VideosService';

class VideosStore {
  videos = [];
  currentVideoId = ' ';
  viewedList = [];

  constructor() {
    makeAutoObservable(this);
  }

  async loadVideos(text) {
    this.videos = await videosService.getVideos(text);
  }
}

export default new VideosStore();
