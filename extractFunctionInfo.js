  function extractFunctionInfo(func, description = '', fileName = '') {
    const functionString = func.toString();
    const functionName = func.name || 'anonymous';
    const functionParams = functionString.match(/\(([^)]*)\)/)[1].split(',').map(param => param.trim());
    const functionBody = functionString.match(/\{([^]*)\}/)[1].trim();

    const parsedAST = acorn.parse(functionBody, { ecmaVersion: 'latest' });

    const instructions = [];
    acorn.walk.simple(parsedAST, {
      FunctionDeclaration(node) {
        const innerFunctionInfo = {
          functionName: node.id.name,
          paramIn: node.params.map(param => param.name),
          instructions: [], // Placeholder for inner functions
          paramOut: [], // Placeholder for output params of inner functions
          fileName: fileName // Placeholder for file name
        };
        instructions.push(innerFunctionInfo);
      }
    });

    const functionInfo = {
      functionName: functionName,
      description: description,
      paramIn: functionParams,
      instructions: instructions.map(instruction => this.extractInnerFunction(instruction)),
      paramOut: [], // Placeholder for output params of outer function
      fileName: fileName // Placeholder for file name
    };

    const existingFuncIndex = this.functions.findIndex(func => func.functionName === functionName);
    if (existingFuncIndex !== -1) {
      this.functions[existingFuncIndex] = { ...this.functions[existingFuncIndex], ...functionInfo };
    } else {
      this.functions.push(functionInfo);
    }
  }

function extractInnerFunction(instruction) {
  const func = new Function(`return ${instruction.functionName}`)();
  return this.extractFunctionInfo(func);
}
