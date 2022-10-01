import { style } from "@vanilla-extract/css";
import { fontStyles, fonts } from "./typography.css";

export const layout = style({
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "16px",
});

export const label = fontStyles.inter.small;

export const p = fontStyles.inter.medium;

export const h2 = fontStyles.inter.large;

export const h1 = fontStyles.inter.xlarge;

export const boldText = style([
  fontStyles.inter.medium,
  {
    color: "red",
    fontVariationSettings: `"wght" ${fonts.inter.wghts[700]}`,
  },
]);
