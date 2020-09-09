import { Rule, SchematicContext, Tree, url, apply, mergeWith, template } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';


export function helloTemplate(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    /**
     * Utilizo a funcão url para acessar o contexto de um diretório
     * nesse caso, pego o contexto do diretório files, dentro do diretório atual
     */
    const templateFile = url('./files');

    /**
     * Utilizo a funcão apply para aplicar ao contexto informado (templateFile), 
     * as rules que vão fazer as modificar o contexto passado
     * Nesse caso, só é passada uma unica rule já existente (template), 
     * para injetar no contexto informado algumas informações (options, strings)
     * options = opções informadas no CLI e definidas no schema.json
     * string = conjunto de funções oferecidas pelo pacote core...que ofere funcões como `classify`, `dasherize` (utilizada para criar o nome do arquivo = `__name@dasherize__`)
     * 
     */
    const resolvedTemplate = apply(templateFile, [
      template({..._options,
        ...strings
      })
    ]);

    /**
     * Retorno o resultado da função mergeWith
     * A função mergeWith, é responsável por pegar o contexto criado (resolvedTemplate)
     * e mesclar com o contexto atual, atribuindo as moficações na tree
     */
    return mergeWith(resolvedTemplate)(tree, _context);
  };
}
