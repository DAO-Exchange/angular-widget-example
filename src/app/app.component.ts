import {AfterViewInit, Component, ElementRef} from '@angular/core';
import MyReactComponent from "./react.component";
import * as React from 'react';
import * as ReactDOM from 'react-dom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-widget-example';
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    ReactDOM.render(React.createElement(MyReactComponent), this.el.nativeElement.querySelector('#react-container'));
  }
}
