class JavaScriptCodeBuilder {
  constructor() {
    this.code = '';
    this.lastMethod = null;
  }

  addFunction(name, parameters, body) {
    if (this.lastMethod !== null && this.lastMethod !== 'addComment') {
      throw new Error('Invalid order: Functions must follow comments.');
    }
    this.code += `function ${name}(${parameters}) {\n  ${body}\n}\n\n`;
    this.lastMethod = 'addFunction';
  }

  addVariable(name, value) {
    if (this.lastMethod !== 'addFunction' && this.lastMethod !== 'addVariable') {
      throw new Error('Invalid order: Variables must follow functions or variables.');
    }
    this.code += `const ${name} = ${value};\n\n`;
    this.lastMethod = 'addVariable';
  }

  addClass(name, methods = []) {
    if (this.lastMethod !== 'addVariable' && this.lastMethod !== 'addClass') {
      throw new Error('Invalid order: Classes must follow variables or classes.');
    }
    this.code += `class ${name} {\n`;

    methods.forEach(method => {
      this.code += `  ${method}\n`;
    });

    this.code += '}\n\n';
    this.lastMethod = 'addClass';
  }

  addMethod(name, parameters, body) {
    if (this.lastMethod !== 'addClass' && this.lastMethod !== 'addMethod') {
      throw new Error('Invalid order: Methods must follow classes or methods.');
    }
    this.code += `  ${name}(${parameters}) {\n    ${body}\n  }\n`;
    this.lastMethod = 'addMethod';
  }

  addImport(module, items) {
    if (this.lastMethod !== null && this.lastMethod !== 'addComment') {
      throw new Error('Invalid order: Imports must follow comments.');
    }
    this.code += `import { ${items.join(', ')} } from '${module}';\n\n`;
    this.lastMethod = 'addImport';
  }

  addExport(item) {
    if (this.lastMethod !== 'addVariable' && this.lastMethod !== 'addClass' && this.lastMethod !== 'addMethod') {
      throw new Error('Invalid order: Exports must follow variables, classes, or methods.');
    }
    this.code += `export { ${item} };\n\n`;
    this.lastMethod = 'addExport';
  }

  addComment(comment) {
    this.code += `// ${comment}\n`;
    this.lastMethod = 'addComment';
  }

  getCode() {
    return this.code;
  }
}
