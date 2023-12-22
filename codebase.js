class Codebase {
  constructor() {
    this.functions = [
      ...JavaScriptOperatorsAsFunctions
    ];
    this.getAllFunctions();
  }
  extractFunctionInfo(func, description = '', fileName = '') {extractFunctionInfo(...arguments);}
  findPaths() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output").value;
    const inputType = typeof input;
    const goalType = typeof output;
    let path = [];
    const typedPaths = TypePathFinder(path, this.getAllFunctions(), inputType, goalType);
    const subTypedPaths = SubTypePathFinder(path, typedPaths, inputConstraint, goalConstraint);
    const algoPaths = AlgoPathFinder(path, subTypedPaths, input, goal);
    document.getElementById('paths').innerHTML += algoPaths;
  }
  minifyCode() {minifyCode(code);}
  replaceDataStructures() {replaceDataStructures}
  improveAlgorithms() {improveAlgorithms()}
  processorOptimization(){processorOptimization()}
  optimizeCode() {
    this.minifyCode();
    this.replaceDataStructures();
    this.improveAlgorithms();
  }
  searchFunctionByName(name) {
    if (!name) name = document.getElementById("functionName").value;
    let found = [this.functions.find(func => func.name === name)];
    let preserved = this.functions;
    this.functions = found;
    this.getAllFunctions();
    this.functions = preserved;
  }
  getAllFunctions() {
    document.getElementById("functions").innerHTML = "";
    this.functions.forEach((funcObj)=>{
      document.getElementById("functions").innerHTML += `<div>funcName: ${funcObj.name} paramIn: ${funcObj.paramIn} paramOut: ${funcObj.paramsOut}</div>`;
    })
  }
  insertFunction(code){
    if (!code) code = document.getElementById("functionInfo").value;
    const EfuncObj = extractFunctionInfo(code);
    // let sameCode = false;
    // let sameName = false;
    // this.functions.forEach((funcObj)=>{
    //     if (funcObj.name === EfuncObj.name) sameName = true;
    //     if (funcObj.code === EfuncObj.code) sameCode = true;
    // });
    // if      (sameCode) throw new Error("reject: Same Code found in db");
    // else if (sameName) throw new Error("reject: Same Name found in db");
    // else 
    this.functions.push(EfuncObj);
    this.getAllFunctions();
  }
}
