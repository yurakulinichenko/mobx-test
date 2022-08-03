import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const ViewedVideos = ({ showViewed, viewAgain }) => {
  return (
    <List>
      {showViewed.map((item) => (
        <ListItem key={item.id} onClick={() => viewAgain(item)}>
          <ListItemText>{item.title}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};
