# DevProfile

Este projeto é um portfólio pessoal desenvolvido em Angular, com foco em apresentar experiências profissionais, habilidades técnicas e informações de contato de forma moderna e responsiva.

## Funcionalidades
- Menu superior fixo com navegação entre páginas (Sobre Mim, Projetos, Experiências, Contato, Skills)
- Página inicial com perfil, foto, e links para LinkedIn, GitHub, e WhatsApp
- Página "Sobre Mim" com apresentação biográfica
- Página "Experiências" com linha do tempo detalhada de experiências profissionais
- Página "Skills" com visual moderno para competências técnicas
- Totalmente responsivo e com tema escuro

## Tecnologias Utilizadas
- Angular 17+
- Angular Material
- TypeScript
- HTML5 & CSS3

## Estrutura do Projeto
```
DevProfile/
  ├── src/
  │   ├── app/
  │   │   ├── about-me/
  │   │   ├── experiences/
  │   │   ├── portfolio-menu/
  │   │   ├── skills/
  │   │   └── ...
  │   ├── assets/
  │   └── styles.css
  ├── angular.json
  ├── package.json
  └── README.md
```

## Como Executar
1. Instale as dependências:
   ```
   npm install
   ```
2. Rode o projeto localmente:
   ```
   ng serve -o
   ```
3. Acesse em [http://localhost:4200](http://localhost:4200)

## Personalização
- Edite os arquivos em `src/app/` para alterar informações de perfil, experiências e skills.
- As rotas podem ser ajustadas em `src/app/app.routes.ts`.
- O tema e fontes podem ser personalizados em `src/styles.css`.

## Contato
- Email: ageuoliveira0@email.com
- LinkedIn: https://www.linkedin.com/in/ageu-oliveira-39b55b203/
- GitHub: https://github.com/ageuss

---

Projeto criado para fins de estudo e portfólio profissional.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
