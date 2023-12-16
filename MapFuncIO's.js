function MapFunctionIOs(minNum, maxNum) {
  const JavaScriptOperatorsAsFunctions = [
    // Arithmetic Functions
    { func: function add(a, b) { return a + b; }, name: 'add' },
    { func: function subtract(a, b) { return a - b; }, name: 'subtract' },
    { func: function multiply(a, b) { return a * b; }, name: 'multiply' },
    { func: function divide(a, b) { return a / b; }, name: 'divide' },
    { func: function modulo(a, b) { return a % b; }, name: 'modulo' },
    { func: function exponentiate(base, exponent) { return base ** exponent; }, name: 'exponentiate' },
    
    // Comparison Functions
    { func: function isEqualTo(a, b) { return a == b; }, name: 'isEqualTo' },
    { func: function isNotEqualTo(a, b) { return a != b; }, name: 'isNotEqualTo' },
    { func: function isStrictEqual(a, b) { return a === b; }, name: 'isStrictEqual' },
    { func: function isStrictNotEqual(a, b) { return a !== b; }, name: 'isStrictNotEqual' },
    { func: function isGreaterThan(a, b) { return a > b; }, name: 'isGreaterThan' },
    { func: function isLessThan(a, b) { return a < b; }, name: 'isLessThan' },
    { func: function isGreaterOrEqual(a, b) { return a >= b; }, name: 'isGreaterOrEqual' },
    { func: function isLessOrEqual(a, b) { return a <= b; }, name: 'isLessOrEqual' },
    
    // Logical Functions
    { func: function logicalAND(a, b) { return a && b; }, name: 'logicalAND' },
    { func: function logicalOR(a, b) { return a || b; }, name: 'logicalOR' },
    
    // Bitwise Functions
    { func: function bitwiseAND(a, b) { return a & b; }, name: 'bitwiseAND' },
    { func: function bitwiseOR(a, b) { return a | b; }, name: 'bitwiseOR' },
    { func: function bitwiseXOR(a, b) { return a ^ b; }, name: 'bitwiseXOR' },
    { func: function leftShift(a, b) { return a << b; }, name: 'leftShift' },
    { func: function rightShift(a, b) { return a >> b; }, name: 'rightShift' },
    { func: function unsignedRightShift(a, b) { return a >>> b; }, name: 'unsignedRightShift' }
  ];

  const results = {};

  for (const { func, name } of JavaScriptOperatorsAsFunctions) {
    for (let a = minNum; a <= maxNum; a++) {
      for (let b = minNum; b <= maxNum; b++) {
        const inputs = [a, b];
        let result;
        try {
          result = func(a, b);
          const dataType = typeof result;

          if (!results.hasOwnProperty(dataType)) {
            results[dataType] = {};
          }

          if (!results[dataType].hasOwnProperty(result)) {
            results[dataType][result] = {};
          }

          if (!results[dataType][result].hasOwnProperty(name)) {
            results[dataType][result][name] = [];
          }

          results[dataType][result][name].push(inputs);
        } catch (error) {
          console.error(`Error with inputs (${a}, ${b}) in operator ${name}: ${error.message}`);
        }
      }
    }
  }

  return results;
}

// Example usage:
const minNumber = 1;
const maxNumber = 5;
const resultMap = MapFunctionIOs(minNumber, maxNumber);
console.log(resultMap);
