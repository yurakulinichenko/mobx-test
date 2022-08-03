import ReactPlayer from 'react-player';

export const VideoPlayer = ({ currentVideoId }) => {
  const videoUrl = `https://www.youtube.com/watch?v=${currentVideoId}`;
  return (
    <ReactPlayer url={videoUrl} playing={true} loop={true} controls={true} />
  );
};
