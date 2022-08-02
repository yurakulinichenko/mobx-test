import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const ViewedVideos = ({ showViewed }) => {
  return (
    <List>
      {showViewed.map((item, index) => (
        <ListItem key={item[index]}>
          <ListItemText>{item}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};
