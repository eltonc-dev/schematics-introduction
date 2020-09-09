import { Rule, SchematicContext, Tree, url, apply, mergeWith, template } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function helloTemplate(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const templateFile = url('./files');
    const resolvedTemplate = apply(templateFile, [
      template({..._options,
        ...strings
      })
    ]);
    return mergeWith(resolvedTemplate)(tree, _context);
  };
}
