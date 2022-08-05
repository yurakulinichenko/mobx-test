import React from 'react';
import { observer } from 'mobx-react';
import { Container } from '@mui/system';
import { Box } from '@mui/system';

import { Input } from '../../../shared/components/input';
import { VideoList } from '../../../shared/components/videoList';
import videosStore from '../../../shared/stores/VideosStore';
import { VideoPlayer } from '../../../shared/components/videoPlayer';
import { ViewedVideos } from '../../../shared/components/viewedVideos';
import { HomeStyles } from './Home.styles';

export const Home = observer(() => {
  const onVideosInputChange = (e) => {
    videosStore.loadVideos(e.target.value);
  };
  const onListItemClick = (event, item) => {
    videosStore.setCurrentVideoId(item.id.videoId);
    videosStore.setViewedList(item.label, item.id.videoId);
  };

  const onViewedListItemClick = (viewedList) => {
    videosStore.setCurrentVideoId(viewedList.id);
  };

  return (
    <>
      <Container>
        <h1>Video Player</h1>
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
          />
        </Box>
        {/* <VideoList /> */}
      </Container>
    </>
  );
});
