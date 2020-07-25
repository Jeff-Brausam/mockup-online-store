export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const checkValidity = (value, rules) => {
  let isValid = true;
  // check the rules and see it they are valid, the isValid is set as a Gotcha to make sure they all pass not just the last
  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
  }
  // Zip code Length
  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }
  // Zip code max length
  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }
  // Check it it is an email (user@anything.com)
  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }
  // Check that the zip code is numbers
  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }
  // If all set rules pass, return true
  return isValid;
};
