![React Color Picker](https://github.com/tariqulislam/react-color-picker/blob/master/pick_image.png)
# react-color-picker
Color picker is a important form element, which are used in website, which has color functionality, such as e-commerce site, garments related online software. Project management software and diagram related online application.

# NPM Package Link

```
https://www.npmjs.com/package/react-color-picker-text
```

# Installation and Configure

```
npm install --save react-color-picker-text
```

Import the library to jsx or js file of react application

```javascript
import ColorPicker from "react-color-picker-text";
```

# Sample Code
```javascript
import React, { Component } from "react";
import ReactDOM from "react-dom";
import ColorPicker from "react-color-picker-text";
import "./styles.css";

class App extends Component {
  onColorPickerInfoChange = color => {
    console.log("Main Color Change", color);
  };

  render() {
    // change the default design of the color picker
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
        defaultColor={"#554"}
      />
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```
## Get Color from Picker 
From Picker we can get RGBA color and Hex Color pattern. We also get Hue Pattern by calling this function
named `onColorChange` as `<ColorPicker>` props

```javascript
<ColorPicker
        onColorChange={this.onColorPickerInfoChange} />
```
Then You just call the method to react class
```javascript
 onColorPickerInfoChange = color => {
    console.log("Main Color Change", color);
  };
```

## Change the Style of Textbox of Color picker within `render` function

```javascript
const styles = {
      ......
      colorTextBoxStyle: {
        height: "35px",
        border: "none",
        borderBottom: "1px solid lightgray",
        paddingLeft: "35px"
      }
    };
```
Then add it to `<ColorPicker >` props just like that

```javascript
<ColorPicker
 colorTextBoxStyle={styles.colorTextBoxStyle}
 />
```

## Change the Style of Label and Label name of Color picker by

```javascript
const styles = {
       title: "Color Picker",
      labelStyle: {
        paddingBottom: "7px",
        fontSize: "11px"
      },
};
```
Then add it to `<ColorPicker >` props just like that

```javascript
<ColorPicker
 labelStyle={styles.labelStyle}
 title={styles.title}
 />
```



## Picker Type (pickerType: <props>)
```
1. Chrome,
2. Sketch,
3. Photoshop,
4. Github,
5. Twitter,
6. Swatches,
7. Compact
```
Change the Type just add the props to `<ColorPicker >`

```javascript
<ColorPicker
 pickerType={"Github"}
 />
```
By Default This `<ColorPicker />` Initial Color is `Gray` or `#999999`
Developer Can change this color by using `defaultColor` props in `<ColorPicker>`

```javascript
<ColorPicker
   defaultColor={"#554"}
/>
```

