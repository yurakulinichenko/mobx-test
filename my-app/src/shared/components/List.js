import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";
import Input from "./InputComponent";
import React from "react";

export class List {
  render() {
    return (
      <div>
        <ul>
          {/* {videos.videos.items[index].id.videoId.map((current) => (
              <li key={current}>{current}</li>
            ))} */}
        </ul>
      </div>
    );
  }
}
