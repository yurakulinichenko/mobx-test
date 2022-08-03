import React from 'react';
import { observer } from 'mobx-react';

import { Input } from '../../shared/components/Input';
import { VideoList } from '../../shared/components/VideoList';
import videosStore from '../../shared/stores/VideosStore';
import { VideoPlayer } from '../../shared/components/VideoPlayer';
import { ViewedVideos } from '../../shared/components/ViewedVideos';
import { Container } from '@mui/system';
import { Box } from '@mui/system';

export const Home = observer(() => {
  const onVideosInputChange = (e) => {
    videosStore.loadVideos(e.target.value);
  };
  const onListItemClick = (item) => {
    videosStore.setCurrentVideoId(item.id.videoId);
    videosStore.setViewedList(item.snippet.title, item.id.videoId);
  };

  const onViewedListItemClick = (viewedList) => {
    videosStore.setCurrentVideoId(viewedList.id);
  };

  return (
    <>
      <Container>
        <h1>Video Player</h1>
        <Input handleTextChange={onVideosInputChange} />
        <Box sx={{ display: 'flex' }}>
          <VideoPlayer currentVideoId={videosStore.currentVideoId} />
          <ViewedVideos
            showViewed={videosStore.viewedList}
            viewAgain={onViewedListItemClick}
          />
        </Box>
        <VideoList videos={videosStore.videos} chooseVideo={onListItemClick} />
      </Container>
    </>
  );
});
