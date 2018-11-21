import React from "react";
import ReactDOM from "react-dom";
import { ChromePicker } from "react-color";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      defaultColor: "#999999",
      changeColor: "#999999",
      color: {
        r: "0",
        g: "9",
        b: "153",
        a: "1"
      }
    };
  }
  onHandleOpenColorPicker = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };
  onHandleCloseColorPicker = () => {
    this.setState({ displayColorPicker: false });
  };

  onPickerChange = color => {
    this.setState({ color: color.rgb, changeColor: color.hex });
  };

  onChangeColorValue = event => {
    const value = event.target.value;
    console.log(value);
    if (value && value.length <= 7) {
      this.setState({ changeColor: event.target.value });
    } else {
      this.setState({ changeColor: this.state.defaultColor });
    }
  };

  render() {
    return (
      <div
        style={{ marginTop: "10px" }}
        className={"entity-color-picker-wrapper"}
      >
        <label className={"entity-color-label"}>Entity Color</label>
        <div style={{ clear: "both" }} />
        <div
          style={{
            backgroundColor: this.state.changeColor,
            borderBottom: `1px solid ${this.state.changeColor}`
          }}
          className={"show-color"}
        />
        <div className={"color-picker-container"}>
          <input
            className={"color-picker-text"}
            type="text"
            value={this.state.changeColor}
            onChange={e => this.onChangeColorValue(e)}
            onClick={() => this.onHandleOpenColorPicker()}
          />
          {this.state.displayColorPicker ? (
            <div className={"color-picker-popover"}>
              <div
                className={"color-picker-cover"}
                onClick={this.onHandleCloseColorPicker}
              />
              <ChromePicker
                color={this.state.color}
                onChange={this.onPickerChange}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
