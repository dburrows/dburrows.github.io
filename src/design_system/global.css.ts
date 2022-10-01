import { globalFontFace, globalStyle } from "@vanilla-extract/css";
import { fonts } from "./typography.css";

Object.values(fonts).forEach(({ name, wghtRange, file, format }) => {
  globalFontFace(`"${name}"`, {
    fontDisplay: `optional`,
    fontStyle: `normal`,
    fontWeight: wghtRange,
    src: `url("${file}") format("${format}")`,
  });
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("p, strong, h1, h2, h3, h4, h5, h6", {
  fontFamily: fonts.inter.name,
  fontVariationSettings: `"wght" ${fonts.inter.wghts[400]}`,
});
