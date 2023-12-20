  function TypePathFinder(inputType, outputType, funcs) {
      const visited = {};
      const paths = [];
      function backtrack(currentType, currentPath) {
        if (currentType === outputType) {
          paths.push(currentPath.slice()); // Create a copy of the path
          return;
        }
        for (const func of funcs) {
          const input = func.input;
          const output = func.output;
          if (currentType === input && !visited[output]) {
            visited[output] = true;
            currentPath.push(func);
            backtrack(output, currentPath);
            currentPath.pop();
            visited[output] = false;
          }
        }
      }
      backtrack(inputType, []);
      return paths;
    }
