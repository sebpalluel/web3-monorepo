export const toCssId = (str: string) => {
  // convert characters to a css id
  return str.replace(/[^a-z0-9]/gi, '_').toLowerCase();
};
