# AngularDataApp
AngularJS template of a small website that allows you to HTTP POST a formulary and HTTP GET data from an API so It can be shown in a table.

## Functionalities
### NavBarMenu
The template includes a NavBarMenu that allows users to change between screens.

### Screen 1 - List
- [x] This screen has a table that is filled onInit with fetched data from a free online API REST.
- [ ] You can also send a HTTP DELETE of the item by pressing the red crosses on the rows of the table.

### Screen 2 - Form
- [x] This screen allows users to create an item and send it by HTTP POST to an url

---
# SetUp Tutorial
In the following lines I will explain the necessary configurations to recreate the development of the environment of this project.

## Command line configurations
1) Create the angular project
ng new angular-data-app

2) Create the two components of this project: the form and the list pages.
ng new angular-form

3) Install bootstrap and jQuery
npm install bootstrap --save
npm install jquery --save

4) Add project to a github repository (Create one first and copy the url)
git init
git remote add <url>
git add .
git commit -m "Comment"
git push origin master
  
## Code Configurations


---

# Autogenerated Text

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

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
