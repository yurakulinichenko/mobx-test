import { observer } from "mobx-react";
import React from "react";
import InputComponent from "../components/InputComponent";
export class Input extends React.Component {
  render() {
    return <input type="text" />;
  }
}
// export const Input = observer(InputComponent);
