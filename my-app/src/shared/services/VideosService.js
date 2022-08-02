import { observer } from 'mobx-react';
import { baseUrl } from '../constants/common';
import { Key } from '../constants/common';

class VideosService {
  getVideos(text) {
    return fetch(`${baseUrl}&part=snippet&key=${Key}&type=video&q=${text}`)
      .then((response) => response.json())
      .then((json) => json.items);
  }
}
export default new VideosService();
