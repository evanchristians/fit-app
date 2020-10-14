export const Sleep = (ms) => {
  return new Promise((res) => setTimeout(res, ms));
};
