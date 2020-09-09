#Introdução

Repositório criado para a apresentação da talk - introdução ao Angular Schematics.

Link dos slides:

https://docs.google.com/presentation/d/1nTASvAsqkQ-KANC0nvDGr1EuIU4P4_d7UCGlbZgBCmQ/edit?usp=sharing

Existem comentários dentro do código explicando como as coisas estão funcionando

# Steps

## Instalar devkit schematics
`npm install angular-devkit/schematics-cli -g`
 
## criar projeto - vá para a diretório que quiser e rode
`schematics blank hello`

O comando acima serve tanto para criar o projeto de schematics, como parar criar um schematics em si.
Caso rode o comando fora de um projeto schematics, ele criará o projeto e um schematics com o mesmo nome.
Caso rode o comando de dentro do projeto, ele criará um schematics com o nome informado


## Build
`npm run build`

É recomentado criar um script de build com a flag `watch` ligada, para não ter que ficar rodando build toda vez que modificar um arquivo. Veja no arquivo `package.json` na sessão de scripts.


## Rodar seu schematics
`schematics .:hello`

O ponto `.` é o path de onde estão os schematics, como nesse caso estamos rodando o comando de dentro do repositório do projeto, usamos o `.`.
Os `:hello` é a estrutura para chamar o schematics. `hello` é o nome do schematics, definido no arquivo collection.json

Por padrão, os schematics, vem com o modo debug ligado. logo, para de fato, fazer as modificações no fileSystem é preciso desligado o modo de debug, como no exemplo abaixo `--debub:false`

`schematics .:hello debug=false`


Quer ser aprofundar mais em schematics?
veja as referências usadas para essa talk em:

Artigos e angular docs
* https://angular.io/guide/schematics
* https://medium.com/@tomastrajan/total-guide-to-custom-angular-schematics-5c50cf90cdb4 (Ótimo artigo mostrando tudo que precisa saber para criar schematics e acessalos via angular cli)
* https://nx.dev/angular/workspace/schematics/workspace-schematics
Youtube
* https://www.youtube.com/watch?v=M5YSPas3qFo (Ótimo vídeo mostrando tudo que precisa saber para criar schematics e acessalos via angular cli)


-----

# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with
```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!
 