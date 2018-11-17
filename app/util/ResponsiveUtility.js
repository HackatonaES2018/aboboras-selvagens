import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const HEX_PATTERN = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

const hexToRgba = (hex, alpha = 1.0) => {
  const result = HEX_PATTERN.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        a: alpha == null ? 1.0 : alpha
      }
    : {};
};

const rgbaToStyle = rgba => {
  return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
};

const responsiveScalar = f => {
  return Math.sqrt(height * height + width * width) * (f / 100);
};

const scaleHorizontal = size => (width / guidelineBaseWidth) * size;

const hexToRgbaAsArray = (hex, alpha = 1.0) => {
  const result = HEX_PATTERN.exec(hex);

  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
        alpha == null ? 1.0 : alpha
      ]
    : [];
};

const responsiveWidth = widthPercentage => {
  return width * (widthPercentage / 100);
};

const responsiveHeight = heightPercentage => {
  return height * (heightPercentage / 100);
};

export {
  hexToRgba,
  hexToRgbaAsArray,
  rgbaToStyle,
  responsiveScalar,
  scaleHorizontal,
  responsiveWidth,
  responsiveHeight
};
