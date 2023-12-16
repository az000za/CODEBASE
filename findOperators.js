function findOperators(input, output) {
  const availableOperators = [
    { symbol: '+', operation: (a, b) => a + b },
    { symbol: '-', operation: (a, b) => a - b },
    { symbol: '*', operation: (a, b) => a * b },
    { symbol: '/', operation: (a, b) => b !== 0 ? a / b : null },
    { symbol: '%', operation: (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a % b : null },
    { symbol: '**', operation: (a, b) => a ** b },
    { symbol: '===', operation: (a, b) => a === b },
    // Add more operators as needed
  ];

  const queue = [{ result: input, operations: [], steps: [input] }];
  const visited = new Set();

  while (queue.length > 0) {
    const current = queue.shift();
    const { result, operations, steps } = current;

    if (result[0] === output) {
      const operationSteps = operations.map((op, index) => ({
        operation: op,
        inputs: Array.isArray(steps[index]) ? steps[index] : [steps[index]]
      }));
      return operationSteps;
    }

    if (visited.has(result.toString())) {
      continue; // Skip if this result has been visited before to avoid cycles
    }
    visited.add(result.toString());

    for (let i = 0; i < availableOperators.length; i++) {
      const { symbol, operation } = availableOperators[i];
      const newResult = operation(result[0], result[1]);

      if (newResult !== null && !visited.has(newResult.toString())) {
        const updatedOperations = [...operations, symbol];
        const updatedSteps = [...steps, [result[0], result[1]]]; // Store operands as an array
        const updatedInput = [newResult, result[1]];

        queue.push({ result: updatedInput, operations: updatedOperations, steps: updatedSteps });
      }
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
