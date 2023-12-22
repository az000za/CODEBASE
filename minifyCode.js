function minify(code) {
  // Remove comments
  code = code.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');
  // Remove whitespaces and newlines
  code = code.replace(/\s+/g, '');
  // Shorten variable names
  let vars = code.match(/var[a-zA-Z0-9_$]+/g) || [];
  let map = {};
  let count = 0;
  for (let v of vars) {
    let name = v.slice(3);
    if (!map[name]) {
      let newName = String.fromCharCode(97 + count); // a, b, c, ...
      map[name] = newName;
      count++;
    }
  }
  for (let name in map) {
    let newName = map[name];
    let regex = new RegExp('\\b' + name + '\\b', 'g');
    code = code.replace(regex, newName);
  }
  // Inline functions and variables
  let inlines = code.match(/=[a-zA-Z0-9_$]+\(.*?\);/g) || [];
  for (let i of inlines) {
    let parts = i.split('=');
    let name = parts[0];
    let value = parts[1].slice(0, -1);
    let regex = new RegExp('\\b' + name + '\\b', 'g');
    code = code.replace(regex, value);
  }
  // Eliminate dead code and unreachable branches
  code = code.replace(/if\(false\)\{.*?\}/g, '');
  code = code.replace(/else\{if/g, 'else if');
  // Simplify expressions and statements
  code = code.replace(/\+\+|--/g, '+=1');
  code = code.replace(/([a-zA-Z0-9_$]+)([+\-*\/%]=)1;/g, '$1$2$1;');
  code = code.replace(/([+\-*\/%])=([a-zA-Z0-9_$]+);/g, '$1$2;');
  code = code.replace(/;}/g, '}');
  // Replace literals with constants
  code = code.replace(/Math\.PI/g, '3.14');
  code = code.replace(/Math\.E/g, '2.72');
  code = code.replace(/true/g, '!0');
  code = code.replace(/false/g, '!1');
  // Use bitwise operators and ternary operators
  code = code.replace(/Math\.floor\((.*?)\)/g, '$1|0');
  code = code.replace(/Math\.round\((.*?)\)/g, '($1+0.5)|0');
  code = code.replace(/Math\.ceil\((.*?)\)/g, '(-($1-0.5))|0');
  code = code.replace(/Math\.abs\((.*?)\)/g, '($1<0?-($1):$1)');
  code = code.replace(/if\((.*?)\)\{(.*?)\}else\{(.*?)\}/g, '$1?$2:$3');
  // Minimize the use of parentheses and brackets
  code = code.replace(/\(([a-zA-Z0-9_$]+)\)/g, '$1');
  code = code.replace(/\[([a-zA-Z0-9_$]+)\]/g, '.$1');
  // Return the minified code
  return code;
}
