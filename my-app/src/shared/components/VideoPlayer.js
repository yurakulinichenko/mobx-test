import { observer } from 'mobx-react';

export const VideoPlayer = observer((videos) => {
  return (
    <iframe
      width="420"
      height="315"
      src="https://www.youtube.com/embed/${videoId}"
    ></iframe>
  );
});
