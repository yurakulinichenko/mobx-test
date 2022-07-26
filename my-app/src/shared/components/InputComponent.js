import React from "react";
import { baseUrl } from "../BaseUrl";
import { Key } from "../Key";
import { makeObservable, observable, action } from "mobx";

export class InputComponent extends React.Component {
  videos = [];
  constructor(videos) {
    super();
    makeObservable(this, {
      videos: observable,
      onVideosInputChange: action,
    });
  }

  onVideosInputChange = (e) => {
    fetch(`${baseUrl}${e.target.value}&key=${Key}`)
      .then((response) => response.json())
      .then((json) => (this.videos = json));
  };
}
