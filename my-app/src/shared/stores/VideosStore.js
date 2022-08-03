import { makeAutoObservable } from 'mobx';

import videosService from '../services/VideosService';

class VideosStore {
  videos = [];
  currentVideoId = ' ';
  viewedList = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentVideoId(item) {
    this.currentVideoId = item;
  }

  setViewedList(title, videoId) {
    this.viewedList.push({
      title: title,
      id: videoId,
    });
    if (this.viewedList.length > 5) {
      return this.viewedList.shift();
    }
  }

  async loadVideos(text) {
    this.videos = await videosService.getVideos(text);
  }
}

export default new VideosStore();
