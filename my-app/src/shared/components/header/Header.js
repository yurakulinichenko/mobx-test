import { Toolbar, Typography } from '@mui/material';

import { HeaderStyles } from './Header.styles';

export const Header = () => {
  return (
    <Toolbar sx={HeaderStyles}>
      <Typography variant="h2">Video Player</Typography>
    </Toolbar>
  );
};
