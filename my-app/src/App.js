import "./App.css";
import { Input } from "./shared/constants/Input";
import { observer } from "mobx-react";
import { List } from "./shared/components/List";

function App() {
  return (
    <div className="App">
      <header>Video Player</header>
      <Input />
      {/* <List /> */}
    </div>
  );
}

export default App;
