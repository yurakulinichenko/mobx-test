import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/system';

export const ViewedVideos = ({ showViewed, viewAgain }) => {
  return (
    <Box
      sx={{
        ml: '20px',
        border: '1px solid rgb(118, 118, 118)',
        borderRadius: '5px',
        padding: '10px',
        width: '50%',
      }}
    >
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
