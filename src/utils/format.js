export const numberFormat = (value) => {
  return Intl.NumberFormat("en-us", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
};
