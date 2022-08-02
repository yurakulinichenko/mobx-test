import React from 'react';

import { Input } from '../../shared/components/Input';
import { VideoList } from '../../shared/components/VideoList';
import videosStore from '../../shared/stores/VideosStore';
import { VideoPlayer } from '../../shared/components/VideoPlayer';
import { observer } from 'mobx-react';

export const Home = observer(() => {
  const onVideosInputChange = (e) => {
    videosStore.loadVideos(e.target.value);
  };
  const onListItemClick = (item) => {
    videosStore.currentVideoId = item.id.videoId;
  };

  return (
    <>
      <div>
        <Input handleTextChange={onVideosInputChange} />
      </div>
      <VideoPlayer currentVideoId={videosStore.currentVideoId} />
      <VideoList videos={videosStore.videos} chooseVideo={onListItemClick} />
    </>
  );
});
