import { theme } from '../theme';

const rootFontSize = theme.typography.htmlFontSize;

export const rem = (px) => px / rootFontSize;

const px = (rem) => rem * rootFontSize;

const ap = (startSizeProp, minSizeProp, widthFrom = theme.breakpoints.values.xl, widthTo = 320) => {
   const startSize = px(startSizeProp);
   const minSize = px(minSizeProp);

   const slope = ((startSize - minSize) / (widthFrom - widthTo));
   const yIntersection = -widthTo * slope + minSize;

   const floatValue = `${rem(yIntersection)}rem + ${slope * 100}vw`;

   return `clamp(${minSizeProp}rem, ${floatValue}, ${startSizeProp}rem)`;
};

export default ap;