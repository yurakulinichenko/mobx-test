import React from 'react';
import { observer } from 'mobx-react';

import { Input } from '../../shared/components/Input';
import { VideoList } from '../../shared/components/VideoList';
import videosStore from '../../shared/stores/VideosStore';
import { VideoPlayer } from '../../shared/components/VideoPlayer';
import { ViewedVideos } from '../../shared/components/ViewedVideos';

export const Home = observer(() => {
  const onVideosInputChange = (e) => {
    videosStore.loadVideos(e.target.value);
  };
  const onListItemClick = (item) => {
    videosStore.currentVideoId = item.id.videoId;
    videosStore.viewedList.push({
      title: item.snippet.title,
      id: item.id.videoId,
    });
  };

  const onViewedListItemClick = (item) => {
    videosStore.currentVideoId = item.id;
  };

  return (
    <>
      <div>
        <Input handleTextChange={onVideosInputChange} />
      </div>
      <VideoPlayer currentVideoId={videosStore.currentVideoId} />
      <VideoList videos={videosStore.videos} chooseVideo={onListItemClick} />
      <ViewedVideos
        showViewed={videosStore.viewedList}
        viewAgain={onViewedListItemClick}
      />
    </>
  );
});
