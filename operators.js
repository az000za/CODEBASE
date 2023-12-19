  const JavaScriptNumericFunctions = [
    // Basic Arithmetic
    { func: (a, b) => a + b, name: 'Addition' },
    { func: (a, b) => a - b, name: 'Subtraction' },
    { func: (a, b) => a * b, name: 'Multiplication' },
    { func: (a, b) => a / b, name: 'Division' },
    { func: (a, b) => a % b, name: 'Modulo' },
  
    // Exponential and Logarithmic
    { func: (base, exponent) => base ** exponent, name: 'Exponentiation' },
    { func: a => Math.pow(a, 2), name: 'Square' },
    { func: a => Math.pow(a, 3), name: 'Cube' },
    { func: a => Math.sqrt(a), name: 'Square Root' },
    { func: a => Math.cbrt(a), name: 'Cube Root' },
    { func: a => Math.log10(a), name: 'Logarithm (base 10)' },
    { func: a => Math.log(a), name: 'Natural Logarithm' },
    { func: a => Math.exp(a), name: 'Exponential Function' },
  
    // Trigonometric Functions
    { func: a => Math.sin(a), name: 'Sine' },
    { func: a => Math.cos(a), name: 'Cosine' },
    { func: a => Math.tan(a), name: 'Tangent' },
    { func: a => Math.asin(a), name: 'Arcsine' },
    { func: a => Math.acos(a), name: 'Arccosine' },
    { func: a => Math.atan(a), name: 'Arctangent' },
  
    // Rounding and Absolute Value
    { func: a => Math.abs(a), name: 'Absolute Value' },
    { func: a => Math.ceil(a), name: 'Ceiling' },
    { func: a => Math.floor(a), name: 'Floor' },
    { func: a => Math.round(a), name: 'Round' },
    { func: a => Math.trunc(a), name: 'Truncate (Remove Decimal)' },
  
    // Minimum and Maximum
    { func: (a, b) => Math.max(a, b), name: 'Maximum' },
    { func: (a, b) => Math.min(a, b), name: 'Minimum' },
  
    // Random Number
    { func: () => Math.random(), name: 'Random Number (0 to 1)' },
  ];
  const JavaScriptComparisonFunctions = [
    // Equality Checks
    { 
      func: (a, b) => a == b, 
      name: 'looseEquality',
    },
    { 
      func: (a, b) => a === b, 
      name: 'strictEquality',
    },
    { 
      func: (a, b) => a != b, 
      name: 'looseInequality',
    },
    { 
      func: (a, b) => a !== b, 
      name: 'strictInequality',
    },
  
    // Relational Operators
    { 
      func: (a, b) => a > b, 
      name: 'greaterThan',
    },
    { 
      func: (a, b) => a < b, 
      name: 'lessThan',
    },
    { 
      func: (a, b) => a >= b, 
      name: 'greaterThanOrEqual',
    },
    { 
      func: (a, b) => a <= b, 
      name: 'lessThanOrEqual',
    },
  
    // Other Comparison Functions
    { 
      func: (a, b) => Object.is(a, b), 
      name: 'objectIs_SameValueZero',
    },
    { 
      func: (a, b) => Object.is(a, -0) && Object.is(b, 0) || Object.is(a, 0) && Object.is(b, -0), 
      name: 'objectIs_SameValue',
    },
    { 
      func: (a, b) => isNaN(a) && isNaN(b), 
      name: 'isNaN_CheckForNaN',
    },
    { 
      func: (a, b) => Object.prototype.toString.call(a) === Object.prototype.toString.call(b), 
      name: 'typeEquality',
    },
  ];
  const JavaScriptLogicalFunctions = [
    // Logical AND
    {
      func: (a, b) => a && b,
      name: 'logicalAND',
    },
  
    // Logical OR
    {
      func: (a, b) => a || b,
      name: 'logicalOR',
    },
  
    // Logical NOT
    {
      func: a => !a,
      name: 'logicalNOT',
    },
  
    // XOR (Exclusive OR) - Custom implementation
    {
      func: (a, b) => (a && !b) || (!a && b),
      name: 'logicalXOR',
    }
  ];
  const JavaScriptBitwiseFunctions = [
  // Bitwise AND
  {
    func: (a, b) => a & b,
    name: 'bitwiseAND',
  },

  // Bitwise OR
  {
    func: (a, b) => a | b,
    name: 'bitwiseOR',
  },

  // Bitwise XOR
  {
    func: (a, b) => a ^ b,
    name: 'bitwiseXOR',
  },

  // Bitwise NOT
  {
    func: a => ~a,
    name: 'bitwiseNOT',
  },

  // Left Shift
  {
    func: (a, b) => a << b,
    name: 'leftShift',
  },

  // Signed Right Shift
  {
    func: (a, b) => a >> b,
    name: 'signedRightShift',
  },

  // Unsigned Right Shift
  {
    func: (a, b) => a >>> b,
    name: 'unsignedRightShift',
  }
];
const JavaScriptOperatorsAsFunctions = [
  ...JavaScriptNumericFunctions,
  ...JavaScriptComparisonFunctions,
  ...JavaScriptLogicalFunctions,
  ...JavaScriptBitwiseFunctions,
];
