import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ChromePicker } from "react-color";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      changeColor: "#9999999",
      color: {
        r: "0",
        g: "9",
        b: "153",
        a: "1"
      }
    };
  }
  onHandleShowColorPicker = () => {
    this.setState({ displayColorPicker: true });
  };
  onHandleCloseColorPicker = () => {
    this.setState({ displayColorPicker: false });
  };

  onChangeColorPicker = color => {
    this.setState({ color: color.rgb, changeColor: color.hex });
    //  this.props.onChangeColorInfo(color)
  };

  render() {
    return (
      <div className={"color-picker-container"}>
        <label>{this.props.title}</label>
        <div style={this.props.labelStyle} />
        <div
          style={{ backgroundColor: this.state.changeColor }}
          className={"color-picker-color-background"}
        />
        <div className={"color-text-with-popup"}>
          <input
            readOnly
            style={this.props.colorTextBoxStyle}
            className={"color-picker-text"}
            type="text"
            name="color-picker-text"
            value={this.state.changeColor}
            onClick={() => this.onHandleShowColorPicker()}
          />
          {this.state.displayColorPicker && (
            <div className={"color-picker-palette"}>
              <div
                className={"color-picker-cover"}
                onClick={() => this.onHandleCloseColorPicker()}
              />
              <ChromePicker
                color={this.state.color}
                onChange={this.onChangeColorPicker}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  defaultColor: "#999999",
  title: "Color Picker",
  labelStyle: {
    paddingBottom: "7px",
    fontSize: "11px"
  },
  colorTextBoxStyle: {
    height: "35px",
    border: "none",
    borderBottom: "1px solid lightgray",
    paddingLeft: "35px"
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
