import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const ViewedVideos = ({ showViewed, viewAgain }) => {
  if (showViewed.length > 5) {
    return showViewed.shift();
  }
  return (
    <List>
      {showViewed.map((item, index) => (
        <ListItem key={item.id} onClick={() => viewAgain(item)}>
          <ListItemText>{item.title}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};
