import { checkValidity } from './utility';

  // Input is not empty test (required)
  test('Validation isRequired: Input is valid if the item does not return as an empty string.', () => {
    const isRequired = { required: true }
    expect(checkValidity('', isRequired)).toBe(false);
    expect(checkValidity('hello', isRequired)).toBe(true);
  });
  
  // Input minimum length test (minLength)
  test('Validation minLength: Input should have a minimum length of 5', () => {
    const minLength = { minLength: 5 }
    expect(checkValidity('', minLength)).toBe(false);
    expect(checkValidity('123456', minLength)).toBe(true);
    expect(checkValidity('aaaaaaaaaaa', minLength)).toBe(true);
  });

  // Input maximum length test (maxLength)
  test('Validation maxLength: Input should have a maximum length of 5', () => {
    const maxLength = { maxLength: 5 }
    expect(checkValidity('123456789', maxLength)).toBe(false);
    expect(checkValidity('12345', maxLength)).toBe(true);
  });

  // Input should be of type: number (isNumeric)
  test('Validation isNumeric: Input should be the type of a number', () => {
    const isNumeric = { isNumeric: true }
    expect(checkValidity('helloWorld', isNumeric)).toBe(false);
    expect(checkValidity(123456789, isNumeric)).toBe(true);
  });

  // Input should be an email 
  test('Validation isEmail: Input should be a valid email following the stying of example@example.com', () => {
    const isEmail = {isEmail: true};
    expect(checkValidity('', isEmail)).toBe(false);
    expect(checkValidity('testing', isEmail)).toBe(false);
    expect(checkValidity('testing@testing.com', isEmail)).toBe(true);
  });

