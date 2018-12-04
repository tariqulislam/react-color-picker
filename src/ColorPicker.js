import React from "react";
import { ChromePicker } from "react-color";

export class ColorPicker extends React.Component {
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
    this.props.onColorChange(color);
  };

  render() {
    return (
      <div className={"color-picker-container"}>
        <label>{this.props.title || this.props.defaultTitle}</label>
        <div style={this.props.labelStyle || this.props.defaultLabelStyle} />
        <div
          style={{ backgroundColor: this.state.changeColor }}
          className={"color-picker-color-background"}
        />
        <div className={"color-text-with-popup"}>
          <input
            readOnly
            style={
              this.props.colorTextBoxStyle ||
              this.props.defaultColorTextBoxStyle
            }
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

ColorPicker.defaultProps = {
  defaultColor: "#999999",
  defaultTitle: "Color Picker",
  defaultLabelStyle: {
    paddingBottom: "7px",
    fontSize: "11px"
  },
  defaultColorTextBoxStyle: {
    height: "35px",
    border: "none",
    borderBottom: "1px solid lightgray",
    paddingLeft: "35px"
  }
};

export default ColorPicker;
