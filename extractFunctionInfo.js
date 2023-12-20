function extractFunctionInfo(func, description = '', fileName = '') {
  const functionString = func.toString();
  const functionName = func.name || 'anonymous';
  const functionParams = functionString.slice(
    functionString.indexOf('(') + 1,
    functionString.indexOf(')')
  ).split(',').map(param => param.trim());
  const functionBody = functionString.slice(
    functionString.indexOf('{') + 1,
    functionString.lastIndexOf('}')
  ).trim();

  const instructions = [];
  const innerFunctions = functionBody.match(/function\s+([^\(]+)/g);
  if (innerFunctions) {
    innerFunctions.forEach(innerFunc => {
      const innerFunctionName = innerFunc.replace('function', '').trim();
      const innerFunctionInfo = {
        functionName: innerFunctionName,
        paramIn: [], // Placeholder for inner function's input parameters
        instructions: [], // Placeholder for inner functions
        paramOut: [], // Placeholder for output params of inner functions
        fileName: fileName // Placeholder for file name
      };
      instructions.push(innerFunctionInfo);
    });
  }

  function extractInnerFunction(instruction) {
    const func = new Function(`return ${instruction.functionName}`)();
    return this.extractFunctionInfo(func);
  }

  const functionInfo = {
    functionName: functionName,
    description: description,
    paramIn: functionParams,
    instructions: instructions.map(instruction => extractInnerFunction(instruction)),
    paramOut: [], // Placeholder for output params of outer function
    fileName: fileName // Placeholder for file name
  };

  // Placeholder for existingFuncIndex and this.functions management (to be defined elsewhere)
  // If you have an array 'this.functions' to store the extracted function info, manage it accordingly here

  return functionInfo;
}
