import React, { Component } from "react";
import ReactDOM from "react-dom";
import ColorPicker from "./ColorPicker";
import "./styles.css";

class App extends Component {
  onColorPickerInfoChange = color => {
    console.log("Main Color Change", color);
  };

  render() {
    const styles = {
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
    return (
      <ColorPicker
        onColorChange={this.onColorPickerInfoChange}
        title={styles.title}
        labelStyle={styles.labelStyle}
        colorTextBoxStyle={styles.colorTextBoxStyle}
        pickerType={"Chrome"}
      />
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
