export const isValid = (data, validate, validateParams) => {
  const dataKeys = Object.keys(data);
  const validateResults = dataKeys.map(item => item && validate(item, data[item], !!validateParams[item] && validateParams[item]));
  const result = validateResults.find(value => value == false) != false && true;
  return result;
}