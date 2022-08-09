import ReactPlayer from 'react-player';

import { VideoPlayerStyles } from './VideoPlayer.styles';

export const VideoPlayer = ({ currentVideoId }) => {
  const videoUrl = `https://www.youtube.com/watch?v=${currentVideoId}`;
  return <ReactPlayer url={videoUrl} {...VideoPlayerStyles} />;
};
