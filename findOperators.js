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

  const queue = [{ result: input, operations: [], steps: [input] }];

  while (queue.length > 0) {
    const current = queue.shift();
    const { result, operations, steps } = current;

    if (result[0] === output) {
      const operationSteps = operations.map((op, index) => ({
        operation: op,
        inputs: steps[index]
      }));

      return operationSteps;
    }

    for (let i = 0; i < availableOperators.length; i++) {
      const { symbol, operation } = availableOperators[i];
      const newResult = operation(result[0], result[1]);
      const updatedOperations = [...operations, symbol];
      const updatedSteps = [...steps, newResult];
      const updatedInput = [newResult, result[1]];

      queue.push({ result: updatedInput, operations: updatedOperations, steps: updatedSteps });
    }
  }

  return null;
}

// Example usage:
const inputValues = [5, 3]; // Input values
const desiredOutput = 9;    // Desired output

const result = findOperators(inputValues, desiredOutput);

if (result !== null) {
  console.log("Operations and inputs to achieve the output:");
  console.log(JSON.stringify(result, null, 2));
} else {
  console.log("No combination of operations found to achieve the output.");
}
