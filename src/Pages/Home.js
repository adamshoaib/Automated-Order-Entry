import React, { Component } from "react";
import Button from "../Components/Atoms/Button";
import Typography from "../Components/Atoms/Typography";
import TextBox from "../Components/Atoms/TextBox";
import CalenderPicker from "../Components/Atoms/CalenderPicker";
import TimeDisplay from "../Components/Atoms/TimeDisplay";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Button label="Button" />
        <Typography variant="h2">Hello World</Typography>
        <TextBox label="text box" />
        <CalenderPicker />
        <TimeDisplay />
      </div>
    );
  }
}
