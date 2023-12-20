function findPathsForIOSet(inputsOutputs, funcs, goal, variations) {
  const result = [];

  for (const [input, output] of inputsOutputs) {
    const paths = [];
    AlgoPathFinder(paths, funcs, input, output, variations);
    result.push([input, output, paths]);
  }

  return result;
}
