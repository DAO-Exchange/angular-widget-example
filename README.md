# AngularWidgetExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## ChainVine

In order to install the Widget I did the following:

1. npm install @chainvine/widget react react-dom @types/react @types/react-dom
2. Created a wrapping component (see react.compontent.tsx)
3. Added: 
4. Added the following to the tsconfig.json file:
``` 
    ...
    "allowSyntheticDefaultImports": true,
    "jsx": "react",
    "typeRoots": ["./node_modules/@types", "./typings"],
    "types": ["node"],
    ...
```
5. Added an ngAfterViewInit to the app component:
```
ngAfterViewInit() {
ReactDOM.render(React.createElement(MyReactComponent), this.el.nativeElement.querySelector('#react-container'));
}
```
6. Added the container div to the app.component.html file: `<div id="react-container"></div>`
