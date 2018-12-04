# react-color-picker

Color picker is a important form element, which are used in website, which has color functionality, such as e-commerce site, garments related online software. Project management software and diagram related online application.

# Installations

# Related Articles

# Plugins Usage

```javascript
<ColorPicker
  onColorChange={this.onColorPickerInfoChange}
  title={styles.title}
  labelStyle={styles.labelStyle}
  colorTextBoxStyle={styles.colorTextBoxStyle}
  pickerType={"Chrome"}
/>
```

`onColorChange` function used for get the color when change from picker
`title` use for change the color picker title
`labelStyle` use for change style of the label, if developer want
`colorTextBoxStyle` use for change style of textbox, if developer want
`pickerType`, use for change picker palette type

```
picker type available those are
  Chrome: get the chrome style view for color picker ,
  Sketch: primary style for color picker,
  Photoshop: photoshop style color picker,
  Github: github style color picker,
  Twitter: twitter style color picker,
  Swatches: color swatcher style color picker,
  Compact: compact style color picker
```
