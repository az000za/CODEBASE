function AlgoPathFinder(paths, funcs, input, goal, variations) {
    if (variations === 0) {
      return;
    }
    const queue = [[input, []]];
    const visited = new Set();
    while (queue.length) {
      const [currentVal, currentPath] = queue.shift();
      if (visited.has(currentVal)) {
        continue;
      }
      visited.add(currentVal);
      for (const func of funcs) {
        const nextVal = func(currentVal);
        const nextPath = [...currentPath, func.name, input];
        if (nextVal === goal) {
          paths.push(nextPath);
          console.log("Path found:", nextPath);
        } else if (!visited.has(nextVal)) {
          queue.push([nextVal, nextPath]);
        }
      }
    }
    return paths;
}
