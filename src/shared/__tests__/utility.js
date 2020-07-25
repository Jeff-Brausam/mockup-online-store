import {checkValidity} from "../utility";

// Input is not empty test (required)
test("Validation required: Input is valid if the item does not return as an empty string.", () => {
  const rule = {required: true};
  expect(checkValidity("", rule)).toBe(false);
  expect(checkValidity("hello", rule)).toBe(true);
});

// Input minimum length test (minLength)
test("Validation minLength: Input should have a minimum length of 5", () => {
  const rule = {minLength: 5};
  expect(checkValidity("", rule)).toBe(false);
  expect(checkValidity("12345", rule)).toBe(true);
  expect(checkValidity("aaaaaaaaaaa", rule)).toBe(true);
});

// Input maximum length test (maxLength)
test("Validation maxLength: Input should have a maximum length of 5", () => {
  const rule = {maxLength: 5};
  expect(checkValidity("123456789", rule)).toBe(false);
  expect(checkValidity("12345", rule)).toBe(true);
});

// Input should be of type: number (isNumeric)
test("Validation isNumeric: Input should be the type of a number", () => {
  const rule = {isNumeric: true};
  expect(checkValidity("helloWorld", rule)).toBe(false);
  expect(checkValidity(123456789, rule)).toBe(true);
});

// Input should be an email
test("Validation isEmail: Input should be a valid email following the stying of example@example.com", () => {
  const rule = {isEmail: true};
  expect(checkValidity("", rule)).toBe(false);
  expect(checkValidity("testing", rule)).toBe(false);
  expect(checkValidity("testing@testing.com", rule)).toBe(true);
});
