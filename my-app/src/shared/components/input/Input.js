import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, Stack } from '@mui/material';
import { InputAdornment } from '@mui/material';

import { InputStyles } from './Input.styles';

export class Input extends React.Component {
  render() {
    return (
      <Stack>
        <Autocomplete
          sx={InputStyles}
          freeSolo
          disableClearable
          options={this.props.videos.map((option) => ({
            label: option.snippet.title,
            id: option.id,
            icon: option.snippet.thumbnails.default,
          }))}
          onChange={this.props.chooseVideo}
          placeholder="Search"
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={this.props.handleTextChange}
              InputProps={{
                ...params.InputProps,
                type: 'search',
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </Stack>
    );
  }
}
