export const isEmpty = string => {
  return string.trim().length === 0;
};
export const isTooShort = (string, minLength) => {
  return string.trim().length < minLength;
};
