import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/material';

import { VideoListStyles } from './VideoList.styles';

export const VideoList = ({ videos, chooseVideo }) => {
  return (
    <Box sx={VideoListStyles}>
      <h2>Search Results</h2>
      <List>
        {videos.map((item) => (
          <ListItem key={item.id.videoId}>
            <ListItemText onClick={() => chooseVideo(item)}>
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.description}</p>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
