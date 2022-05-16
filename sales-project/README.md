# SalesProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


<!-- External and Project comments -->

#### Component
Main player in the Angular application has two parts.
1. View for UI
2. Class that contains applciation logic/ event handling for the view

#### View Template
The UI for the component static HTML with dynamic elements

#### Directive
Adds custom behavir to HTML elements, used for looping, conditionals etc

#### Service
Helper class that provides desired functionality, retrieving data from a server, performing a calculation, validation etc

#### Module
A collection  of related components, directives, services etc

### Angular installation
> - sudo npm install -g angular/cli

### Angular version check
> - ng version

### Angular help
> - ng help

<!-- SALES PROJECT STEPS TO COMPLETE -->

01. Create a new project
2.  Update main template page
3.  Generate a new component
4.  Add new component selector to app template page
5.  Generate a SalesPerson class
6.  In SalesPersonListComponent, create sample data
7.  In sales-person-list template file, build HTML table by looping over data

### Create a new Angular project 
> - ng new /project-name/

### To compile and run the project
> - ng serve
> - ng serve --open 
> - ng serve --port 5100 
> - ng serve --port 5100 --open

### Create a new component within the project
> - ng generate component sales-person-list

### Create a new class inside sales-person-list
> -  ng generate class sales-person-list/SalesPerson

<!-- Steps to integrate Bootstrap -->

1. Get links for remote Bootstrap files [Bootstrap Website](https://getbootstrap.com/))
2. Add links to index.html
3. Apply the Bootstrap CSS styles in component HTML template
4. Apply Bootstrap CSS styles in component HTML table
5. Update the Typescript file to reference Bootstrap HTML template