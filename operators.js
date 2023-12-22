  const JavaScriptNumericFunctions = [
    // Basic Arithmetic
    { func: function(a, b) {a + b}, name: 'Addition' },
    { func: function(a, b) {a - b}, name: 'Subtraction' },
    { func: function(a, b) {a * b}, name: 'Multiplication' },
    { func: function(a, b) {a / b}, name: 'Division' },
    { func: function(a, b) {a % b}, name: 'Modulo' },
  
    // Exponential and Logarithmic
    { func: function(base, exponent) {base ** exponent}, name: 'Exponentiation' },
    { func: function(a){Math.pow(a, 2)}, name: 'Square' },
    { func: function(a {Math.pow(a, 3)}, name: 'Cube' },
    { func: function(a { Math.sqrt(a)}, name: 'Square Root' },
    { func: function(a {Math.cbrt(a)}, name: 'Cube Root' },
    { func: function(a {Math.log10(a)}, name: 'Logarithm (base 10)' },
    { func: function(a {Math.log(a)}, name: 'Natural Logarithm' },
    { func: function(a {Math.exp(a)}, name: 'Exponential Function' },
  
    // Trigonometric Functions
    { func: function(a {Math.sin(a)}, name: 'Sine' },
    { func: function(a {Math.cos(a)}, name: 'Cosine' },
    { func: function(a {Math.tan(a)}, name: 'Tangent' },
    { func: function(a {Math.asin(a)}, name: 'Arcsine' },
    { func: function(a {Math.acos(a)}, name: 'Arccosine' },
    { func: function(a {Math.atan(a)}, name: 'Arctangent' },
  
    // Rounding and Absolute Value
    { func: function(a {Math.abs(a)}, name: 'Absolute Value' },
    { func: function(a {Math.ceil(a)}, name: 'Ceiling' },
    { func: function(a {Math.floor(a)}, name: 'Floor' },
    { func: function(a {Math.round(a)}, name: 'Round' },
    { func: function(a {Math.trunc(a)}, name: 'Truncate (Remove Decimal)' },
  
    // Minimum and Maximum
    { func: function(a, b) {Math.max(a, b)}, name: 'Maximum' },
    { func: function(a, b) {Math.min(a, b)}, name: 'Minimum' },
  
    // Random Number
    { func: function() {Math.random()}, name: 'Random Number (0 to 1)' },
  ];
  const JavaScriptComparisonFunctions = [
    // Equality Checks
    { 
      func: function(a, b) {a == b}, 
      name: 'looseEquality',
    },
    { 
      func: function(a, b) {a === b}, 
      name: 'strictEquality',
    },
    { 
      func: function(a, b) {a != b}, 
      name: 'looseInequality',
    },
    { 
      func: function(a, b) {a !== b}, 
      name: 'strictInequality',
    },
  
    // Relational Operators
    { 
      func: function(a, b) {a > b}, 
      name: 'greaterThan',
    },
    { 
      func: function(a, b) {a < b}, 
      name: 'lessThan',
    },
    { 
      func: function(a, b) {a >= b}, 
      name: 'greaterThanOrEqual',
    },
    { 
      func: function(a, b) {a <= b}, 
      name: 'lessThanOrEqual',
    },
  
    // Other Comparison Functions
    { 
      func: function(a, b) {Object.is(a, b)}, 
      name: 'objectIs_SameValueZero',
    },
    { 
      func: function(a, b) {Object.is(a, -0) && Object.is(b, 0) || Object.is(a, 0) && Object.is(b, -0)}, 
      name: 'objectIs_SameValue',
    },
    { 
      func: function(a, b) {isNaN(a) && isNaN(b)}, 
      name: 'isNaN_CheckForNaN',
    },
    { 
      func: function(a, b) {Object.prototype.toString.call(a) === Object.prototype.toString.call(b)}, 
      name: 'typeEquality',
    },
  ];
  const JavaScriptLogicalFunctions = [
    // Logical AND
    {
      func: function(a, b) {a && b},
      name: 'logicalAND',
    },
  
    // Logical OR
    {
      func: function(a, b) {a || b},
      name: 'logicalOR',
    },
  
    // Logical NOT
    {
      func: function(a { !a},
      name: 'logicalNOT',
    },
  
    // XOR (Exclusive OR) - Custom implementation
    {
      func: function(a, b) { (a && !b) || (!a && b)},
      name: 'logicalXOR',
    }
  ];
  const JavaScriptBitwiseFunctions = [
  // Bitwise AND
  {
    func: function(a, b) {a & b},
    name: 'bitwiseAND',
  },

  // Bitwise OR
  {
    func: function(a, b) {a | b},
    name: 'bitwiseOR',
  },

  // Bitwise XOR
  {
    func: function(a, b) {a ^ b},
    name: 'bitwiseXOR',
  },

  // Bitwise NOT
  {
    func: function(a { ~a},
    name: 'bitwiseNOT',
  },

  // Left Shift
  {
    func: function(a, b) { a << b},
    name: 'leftShift',
  },

  // Signed Right Shift
  {
    func: function(a, b) { a >> b},
    name: 'signedRightShift',
  },

  // Unsigned Right Shift
  {
    func: function(a, b) { a >>> b},
    name: 'unsignedRightShift',
  }
];
const JavaScriptOperatorsAsFunctions = [
  ...JavaScriptNumericFunctions,
  ...JavaScriptComparisonFunctions,
  ...JavaScriptLogicalFunctions,
  ...JavaScriptBitwiseFunctions,
];
