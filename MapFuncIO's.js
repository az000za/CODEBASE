function MapFunctionIOs(funcs, minNum, maxNum) {
  const results = {};
  for (const { func, name } of funcs) {
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
