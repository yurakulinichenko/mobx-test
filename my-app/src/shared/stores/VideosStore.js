import { makeAutoObservable } from 'mobx';

import videosService from '../services/VideosService';

class VideosStore {
  videos = [];
  currentVideoId = '';
  viewedList = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentVideoId(item) {
    this.currentVideoId = item;
  }

  setViewedList(title, videoId, url) {
    this.viewedList.push({
      title: title,
      id: videoId,
      icon: url,
    });
    if (this.viewedList.length > 5) {
      this.viewedList.shift();
    }
  }

  removeItem(item) {
    this.viewedList.splice(item, 1);
  }

  async loadVideos(text) {
    this.videos = await videosService.getVideos(text);
  }
}

export default new VideosStore();
