import React from 'react';

export class Input extends React.Component {
  render() {
    return <input type="text" onChange={this.props.handleTextChange} />;
  }
}
