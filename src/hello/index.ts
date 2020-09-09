import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

/**
 * 
 * @param _options Opções recebidas pelo CLI, elas são definidas no arquivo schema.json
 */
export function hello(_options: any): Rule {

  /**
   * @param tree  
   * Representação virtual do file system
   * Primeiro o Angular, aprica as modificações nessa arvore virtual, se se tudo der certo
   * ele de fato, acessa o file system e aplica as modificações
   * 
   * @param _context
   * Contexto atual da funcão
   */
  return (tree: Tree, _context: SchematicContext) => {
    
    /**
     * Funcão create, serve para criar um arquivo.
     * O primeiro parâmetro é o path onde o arquivo será criado
     * O segundo parâmetro é a informação, que será adicionada dentro do arquivo
     */
    tree.create('hello.txt', `Hello ${_options.name}`);

    // tree.create('some/hello.js', `Hello ${_options.name}`);
    return tree;
  };
}
