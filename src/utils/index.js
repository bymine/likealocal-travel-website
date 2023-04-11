export const isInRange = (range, targetNumber) => {
  const [miminumPrice, maximumPrice] = range;

  return targetNumber >= miminumPrice && targetNumber <= maximumPrice;
};
