console.log(`
    The Algorithm Path Finder figures out 

    what algorithms match the input and output.

    Just like a traditional path path finder

    consider 
        the input to be the starting point
        and the output to be the ending point.

    All the inputs and outputs of an algorithm
    are nodes the pathfinder traverses.

    Here are the search space reduction techniques applied
    - mapping data type to data type  
            i.e. number => string ... number => boolean
            i.e  whole  => int ... float => int
    - constrainted range values in data type

    - 
`);


const funcs_xor = [
    function XOR2(a) { return a ^ 2; },
    function XOR3(a) { return a ^ 3; },
    function XOR4(a) { return a ^ 4; },
];

const funs_arith = [
    function ADD2(a) {return a + 2; },
    function MIN1(a) {return a - 1; },
];

const funcs = [
    /*
        These are just a small set of functions available to the path finder
        so it doesn't loop endlessly easily.
    */
    function a() {},
    ...xor_funcs,
    ...funs_arith,
  ];
  
  let input = 1;
  let output = input;
  let goal = 7;
  let paths = []; // Set of successful paths made to goal
  let intersections = {};
  

  function TypePathFinder(paths, funcs, input, goal, variations){
        if (func.name === goal) 
        if (func.params.includes(input.type))

  }
  
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
  
  const foundPaths = AlgoPathFinder(paths, funcs, input, goal, 3);
  
  if (foundPaths.length) {
    console.log("Found ", foundPaths.length, " paths to reach the goal.");
  } else {
    console.log("No paths found to reach the goal.");
  }
  
