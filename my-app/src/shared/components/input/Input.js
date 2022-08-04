import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import { InputAdornment } from '@mui/material';

import { InputStyles } from './Input.styles';

export class Input extends React.Component {
  render() {
    return (
      <Box>
        <TextField
          id="outlined-search"
          type="search"
          sx={InputStyles}
          onChange={this.props.handleTextChange}
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    );
  }
}
