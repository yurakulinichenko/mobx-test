import { makeObservable, observable } from 'mobx';

import { baseUrl } from '../shared/constants/common';
import { Key } from '../shared/constants/common';

class VideosStore {
  videos = [];
  loadVideos(text) {
    fetch(`${baseUrl}${text}&key=${Key}`)
      .then((response) => response.json())
      .then((json) => (this.videos = json.items));
  }
  constructor() {
    makeObservable(this, {
      videos: observable,
    });
  }
}

export default new VideosStore();
