# angular2-boilerplate
Angular 2 or Angular 4 authentication fullstack boilerplate code with webpack and npm as task runer, handling the transpilation of your typescript into javascript, compiling your sass into css, and starting a local web server at http://localhost:8080.

This library provides the basic building blocks for building Angular-2 applications with one app.module, 2 pages and authentication. User hardcoded in

It also comes initialized with npm commands to easily build components, directives, services, and pipes through the command line. More on that later in the readme.

## Front-end

### Instalation
```
git clone https://github.com/Misha-SL/angular2-boilerplate.git

cd angular2-boilerplate

npm install
```
### Runing front-end
```
npm start
```

### Build angular project
```
npm run build
```

## Backend
This is separated part of project. You can find this in /server folder. There are separeted package.json, becase this server side logic ptovided as a demo project for angular2-boilerplate

Please find more detail in /server/README.md

### Installation
```
cd server
npm install
```
### Running
```
node server.js
```
