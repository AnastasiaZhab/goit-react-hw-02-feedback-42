import { Component } from "react";
import "./App.css";
import Feedback from "./components/Feedback";
import Section from "./components/Section";
import Statistics from "./components/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const options = Object.keys(this.state);
    return (
      <div>
        <Section title="Please leave feedback">
          <Feedback options={options} />
        </Section>

        <Section title="Statistics">
          <Statistics options={options} />
        </Section>
      </div>
    );
  }
}

export default App;
