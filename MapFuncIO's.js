function MapFunctionIOs(minNum, maxNum) {
  const JavaScriptNumericFunctions = [
  // Basic Arithmetic
  { func: (a, b) => a + b, description: 'Addition' },
  { func: (a, b) => a - b, description: 'Subtraction' },
  { func: (a, b) => a * b, description: 'Multiplication' },
  { func: (a, b) => a / b, description: 'Division' },
  { func: (a, b) => a % b, description: 'Modulo' },

  // Exponential and Logarithmic
  { func: (base, exponent) => base ** exponent, description: 'Exponentiation' },
  { func: a => Math.pow(a, 2), description: 'Square' },
  { func: a => Math.pow(a, 3), description: 'Cube' },
  { func: a => Math.sqrt(a), description: 'Square Root' },
  { func: a => Math.cbrt(a), description: 'Cube Root' },
  { func: a => Math.log10(a), description: 'Logarithm (base 10)' },
  { func: a => Math.log(a), description: 'Natural Logarithm' },
  { func: a => Math.exp(a), description: 'Exponential Function' },

  // Trigonometric Functions
  { func: a => Math.sin(a), description: 'Sine' },
  { func: a => Math.cos(a), description: 'Cosine' },
  { func: a => Math.tan(a), description: 'Tangent' },
  { func: a => Math.asin(a), description: 'Arcsine' },
  { func: a => Math.acos(a), description: 'Arccosine' },
  { func: a => Math.atan(a), description: 'Arctangent' },

  // Rounding and Absolute Value
  { func: a => Math.abs(a), description: 'Absolute Value' },
  { func: a => Math.ceil(a), description: 'Ceiling' },
  { func: a => Math.floor(a), description: 'Floor' },
  { func: a => Math.round(a), description: 'Round' },
  { func: a => Math.trunc(a), description: 'Truncate (Remove Decimal)' },

  // Minimum and Maximum
  { func: (a, b) => Math.max(a, b), description: 'Maximum' },
  { func: (a, b) => Math.min(a, b), description: 'Minimum' },

  // Random Number
  { func: () => Math.random(), description: 'Random Number (0 to 1)' },
];
  const JavaScriptComparisonFunctions = [
  // Equality Checks
  { 
    func: (a, b) => a == b, 
    description: 'Loose Equality (==)', 
    explanation: 'Compares two values after performing type coercion, so different types can be considered equal. Example: 2 == "2" returns true.'
  },
  { 
    func: (a, b) => a === b, 
    description: 'Strict Equality (===)', 
    explanation: 'Compares both value and type, ensuring both are identical for equality. Example: 2 === "2" returns false due to different types.'
  },
  { 
    func: (a, b) => a != b, 
    description: 'Loose Inequality (!=)', 
    explanation: 'Similar to loose equality but checks for inequality.'
  },
  { 
    func: (a, b) => a !== b, 
    description: 'Strict Inequality (!==)', 
    explanation: 'Similar to strict equality but checks for inequality.'
  },

  // Relational Operators
  { 
    func: (a, b) => a > b, 
    description: 'Greater Than (>)', 
    explanation: 'Checks if one value is greater than another.'
  },
  { 
    func: (a, b) => a < b, 
    description: 'Less Than (<)', 
    explanation: 'Checks if one value is less than another.'
  },
  { 
    func: (a, b) => a >= b, 
    description: 'Greater Than or Equal To (>=)', 
    explanation: 'Checks if one value is greater than or equal to another.'
  },
  { 
    func: (a, b) => a <= b, 
    description: 'Less Than or Equal To (<=)', 
    explanation: 'Checks if one value is less than or equal to another.'
  },

  // Other Comparison Functions
  { 
    func: (a, b) => Object.is(a, b), 
    description: 'Object.is - SameValueZero', 
    explanation: 'Compares two values using the SameValueZero algorithm.'
  },
  { 
    func: (a, b) => Object.is(a, -0) && Object.is(b, 0) || Object.is(a, 0) && Object.is(b, -0), 
    description: 'Object.is - SameValue', 
    explanation: 'Compares using the SameValue algorithm for +0/-0 distinction.'
  },
  { 
    func: (a, b) => isNaN(a) && isNaN(b), 
    description: 'isNaN - Checking for NaN', 
    explanation: 'Checks if both values are NaN.'
  },
  { 
    func: (a, b) => Object.prototype.toString.call(a) === Object.prototype.toString.call(b), 
    description: 'Type Equality', 
    explanation: 'Compares types by checking their internal [[Class]] properties.'
  },
];
  const JavaScriptLogicalFunctions = [
  // Logical AND
  {
    func: (a, b) => a && b,
    description: 'Logical AND (&&)',
    explanation: 'Returns true if both operands are true, otherwise returns false. Example: true && false returns false.'
  },

  // Logical OR
  {
    func: (a, b) => a || b,
    description: 'Logical OR (||)',
    explanation: 'Returns true if at least one operand is true, otherwise returns false. Example: true || false returns true.'
  },

  // Logical NOT
  {
    func: a => !a,
    description: 'Logical NOT (!)',
    explanation: 'Returns true if the operand is false, otherwise returns false. Example: !true returns false.'
  },

  // XOR (Exclusive OR) - Custom implementation
  {
    func: (a, b) => (a && !b) || (!a && b),
    description: 'Logical XOR (Exclusive OR)',
    explanation: 'Returns true if exactly one operand is true, otherwise returns false. Example: true XOR false returns true.'
  }
];

  const JavaScriptBitwiseFunctions = [
  // Bitwise AND
  {
    func: (a, b) => a & b,
    description: 'Bitwise AND (&)',
    explanation: 'Performs a bitwise AND operation on each bit of the operands. Example: 5 & 3 returns 1.'
  },

  // Bitwise OR
  {
    func: (a, b) => a | b,
    description: 'Bitwise OR (|)',
    explanation: 'Performs a bitwise OR operation on each bit of the operands. Example: 5 | 3 returns 7.'
  },

  // Bitwise XOR
  {
    func: (a, b) => a ^ b,
    description: 'Bitwise XOR (^)',
    explanation: 'Performs a bitwise XOR (exclusive OR) operation on each bit of the operands. Example: 5 ^ 3 returns 6.'
  },

  // Bitwise NOT
  {
    func: a => ~a,
    description: 'Bitwise NOT (~)',
    explanation: 'Performs a bitwise NOT (one\'s complement) operation by inverting each bit. Example: ~5 returns -6.'
  },

  // Left Shift
  {
    func: (a, b) => a << b,
    description: 'Left Shift (<<)',
    explanation: 'Shifts the bits of the first operand to the left by the number of places specified by the second operand. Example: 5 << 2 returns 20.'
  },

  // Signed Right Shift
  {
    func: (a, b) => a >> b,
    description: 'Signed Right Shift (>>)',
    explanation: 'Shifts the bits of the first operand to the right by the number of places specified by the second operand. Example: 16 >> 2 returns 4.'
  },

  // Unsigned Right Shift
  {
    func: (a, b) => a >>> b,
    description: 'Unsigned Right Shift (>>>)',
    explanation: 'Shifts the bits of the first operand to the right by the number of places specified by the second operand. Zeros are used for left padding. Example: -1 >>> 0 returns 4294967295.'
  }
];
  const JavaScriptOperatorsAsFunctions = [
    JavaScriptNumericFunctions,
    JavaScriptComparisonFunctions,
    JavaScriptLogicalFunctions,
    JavaScriptBitwiseFunctions,
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
