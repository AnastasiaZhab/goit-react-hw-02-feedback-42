import { Component } from "react";
import "./App.css";
import Feedback from "./components/Feedback";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const options = Object.keys(this.state);
    return <Feedback options={options} />;
  }
}

export default App;
