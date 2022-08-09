import React from 'react';
import { observer } from 'mobx-react';
import { Container } from '@mui/system';
import { Box } from '@mui/system';

import { Input } from '../../../shared/components/input';
import videosStore from '../../../shared/stores/VideosStore';
import { VideoPlayer } from '../../../shared/components/videoPlayer';
import { ViewedVideos } from '../../../shared/components/viewedVideos';
import { HomeStyles } from './Home.styles';
import { Header } from '../../../shared/components/header';

export const Home = observer(() => {
  const onVideosInputChange = (e) => {
    videosStore.loadVideos(e.target.value);
  };
  const onListItemClick = (event, item) => {
    videosStore.setCurrentVideoId(item.id.videoId);
    videosStore.setViewedList(item.label, item.id.videoId, item.icon);
  };

  const onViewedListItemClick = (viewedList) => {
    videosStore.setCurrentVideoId(viewedList.id);
  };

  const handleRemove = (item) => {
    videosStore.removeItem(item);
  };

  return (
    <>
      <Container>
        <Header />
        <Input
          handleTextChange={onVideosInputChange}
          videos={videosStore.videos}
          chooseVideo={onListItemClick}
        />
        <Box sx={HomeStyles}>
          <VideoPlayer currentVideoId={videosStore.currentVideoId} />

          <ViewedVideos
            showViewed={videosStore.viewedList}
            viewAgain={onViewedListItemClick}
            removeFromList={handleRemove}
          />
        </Box>
      </Container>
    </>
  );
});
