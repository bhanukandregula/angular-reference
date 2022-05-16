

<!-- External and Project comments -->

##### Repo Highlights: *ngFor, *ngIF,<ng-template>, [ngClass], Boostrap

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