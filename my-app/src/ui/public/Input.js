import React from "react";
import baseUrl from "../../shared/BaseUrl";
import Key from "../../shared/Key";
import { makeAutoObservable } from "mobx";

export default class Input extends React.Component {
  state = { videos: [] };

  onVideosInputChange = (e) => {
    fetch(`${baseUrl}${e.target.value}&key=${Key}`)
      .then((response) => response.json())
      .then((json) => this.setState({ videos: json }));
  };

  render() {
    console.log(this.state);
    return <input type="text" onChange={this.onVideosInputChange} />;
  }
}
