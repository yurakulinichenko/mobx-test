import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/system';

import { ViewedVideosStyles } from './ViewedVideos.styles';

export const ViewedVideos = ({ showViewed, viewAgain }) => {
  return (
    <Box sx={ViewedVideosStyles}>
      <h2>Viewed Videos</h2>

      <List>
        {showViewed.map((item) => (
          <ListItem key={item.id} onClick={() => viewAgain(item)}>
            <ListItemText>{item.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
