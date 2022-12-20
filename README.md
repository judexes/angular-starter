# AngularBase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.2.

## Start
Run `npm i` to install dependencies.
Run `ng serve` for a dev server on default port 4200.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Rules

#### 1. Import

- A barrel (`index.ts` that exports files from it's context) may only publish elements from its context including its sub-folders.
- Within each context, files reference each other using relative paths without using the barrel.
