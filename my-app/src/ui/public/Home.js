import React from 'react';

import { Input } from '../../shared/components/Input';
import { List } from '../../shared/components/List';
import VideosStore from '../../store/VideosStore';

export const Home = () => {
  const onVideosInputChange = (e) => {
    VideosStore.loadVideos(e.target.value);
  };

  return (
    <>
      <Input handleTextChange={onVideosInputChange} />
    </>
  );
};
