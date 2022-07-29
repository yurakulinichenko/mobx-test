
import React from 'react';
import { observer } from 'mobx-react';

import VideosStore from '../../store/VideosStore';

export const List = observer((videos) => {
  return (
    <ul>
      {VideosStore.videos.map((item) => (
        <li key={item.snippet.channelId}>
          <p>{item.snippet.title}</p>
          <p>{item.snippet.description}</p>
        </li>
      ))}
    </ul>
  );
});

