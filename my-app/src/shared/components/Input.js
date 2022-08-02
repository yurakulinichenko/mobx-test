import React from 'react';
import TextField from '@mui/material/TextField';

export class Input extends React.Component {
  render() {
    return (
      <TextField
        id="outlined-search"
        type="search"
        onChange={this.props.handleTextChange}
      />
    );
  }
}
