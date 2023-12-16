function findOperators(input, output) {
  const availableOperators = [
    { symbol: '+', operation: (a, b) => a + b },
    { symbol: '-', operation: (a, b) => a - b },
    { symbol: '*', operation: (a, b) => a * b },
    { symbol: '/', operation: (a, b) => a / b },
    { symbol: '%', operation: (a, b) => a % b },
    { symbol: '**', operation: (a, b) => a ** b },
    { symbol: '===', operation: (a, b) => a === b },
    // Add more operators as needed
  ];

  const queue = [{ result: input, operations: [] }];

  while (queue.length > 0) {
    const current = queue.shift();
    const { result, operations } = current;

    if (result[0] === output) {
      return operations;
    }

    for (let i = 0; i < availableOperators.length; i++) {
      const { symbol, operation } = availableOperators[i];
      const newResult = operation(result[0], result[1]);
      const updatedOperations = [...operations, symbol];
      const updatedInput = [newResult, result[1]];

      queue.push({ result: updatedInput, operations: updatedOperations });
    }
  }

  return null;
}

// Example usage:
const inputValues = [5, 3]; // Input values
const desiredOutput = 8;   // Desired output

const matchingOperations = findOperators(inputValues, desiredOutput);

if (matchingOperations !== null) {
  console.log("Operations to achieve the output:");
  console.log(matchingOperations.join(', '));
} else {
  console.log("No combination of operations found to achieve the output.");
}
