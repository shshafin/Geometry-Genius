// reduce duplicate code
function inputId(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValue = Number(inputField.value);
  return inputValue;
}

// area
function getArea(element, area) {
  const elementField = document.getElementById(element);
  elementField.innerText = area;
}

/** Data validation
 * 1. set the proper type of input, like number,email
 * 2. check type using typeof
 * 3. NaN means: not a number. isNaN is checking whether the input is not a number or not
 */
