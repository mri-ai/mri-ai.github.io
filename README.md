# OrLabApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## To compile:

 ng build --prod --outputPath docs

New instructions Feb 17, 2024:
###########################
Git add src
npm run start (used to be ng serve)
npm run build -- --prod --outputPath docs (used to be ng build ... )
add everything that’s modified
[ Don’t stage (add) the following:
deleted:    docs/main-es2015.1563edb8f39e6bb9ede5.js
	deleted:    docs/main-es2015.44e34260cefd261983f5.js
	deleted:    docs/main-es5.1563edb8f39e6bb9ede5.js
	deleted:    docs/main-es5.44e34260cefd261983f5.js
	deleted:    docs/polyfills-es2015.7f2be5c3211715ed096a.js
	deleted:    docs/polyfills-es5.28f12a96904b8f2b6d42.js
	deleted:    docs/runtime-es2015.0dae8cbc97194c7caed4.js
	deleted:    docs/runtime-es5.0dae8cbc97194c7caed4.js
	deleted:    docs/styles.76c42e51d8feacb64782.css
	modified:   package-lock.json
	modified:   package.json]
git commit -m "...."
git push

known issues for nvm v20 when running npm run start or build:

issue: "not found module...."
fix by running: 
1. "npm i webpack@5.0.0-beta.26 --save-dev –force".
2. "npm i –force"

if you see " Error message "node: --openssl-legacy-provider is not allowed in NODE_OPTIONS" run:
"export NODE_OPTIONS=--openssl-legacy-provider"
then the following should work
npm run start (used to be ng serve)
npm run build -- --prod --outputPath docs (used to be ng build ... )
