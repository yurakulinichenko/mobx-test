
import { makeAutoObservable } from 'mobx';


import { baseUrl } from '../shared/constants/common';
import { Key } from '../shared/constants/common';

class VideosStore {
  videos = [];

  constructor() {
    makeAutoObservable(this);
  }
  loadVideos(text) {
    fetch(`${baseUrl}&part=snippet&key=${Key}&type=video&q=${text}`)
      .then((response) => response.json())
      .then((json) => (this.videos = json.items));
  }

}

export default new VideosStore();
