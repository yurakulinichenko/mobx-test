import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/system';
import { Link, Typography } from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

import { ViewedVideosStyles } from './ViewedVideos.styles';
import { LinkStyles } from './ViewedVideos.styles';
import { ListItemTextStyles } from './ViewedVideos.styles';

export const ViewedVideos = ({ showViewed, viewAgain, removeFromList }) => {
  return (
    <Box sx={ViewedVideosStyles}>
      <Typography variant="h4">Viewed Videos</Typography>

      <List>
        {showViewed.map((item) => (
          <Link sx={LinkStyles}>
            <ListItem key={item.id} onClick={() => viewAgain(item)}>
              <ListItemText>
                <Box sx={ListItemTextStyles}>
                  <img src={`${item.icon.url}`} alt={'image'} />
                  {item.title}
                </Box>
              </ListItemText>
              <DeleteForeverRoundedIcon
                onClick={(event) => {
                  event.stopPropagation();
                  removeFromList(item.id);
                }}
              />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};
