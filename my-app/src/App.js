import "./App.css";
import Input from "./ui/public/Input";
import { observer } from "mobx-react";

function App() {
  return (
    <div className="App">
      <header>Video Player</header>
      <Input />
    </div>
  );
}

export default App;
