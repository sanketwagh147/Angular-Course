import { Component } from '@angular/core';

@Component({
  // selector can be any css selector
  // selector: 'app-root',
  // selector: '[app-root]', // Square brackets is attribute selector
  //⚡ selecting by id is not supported by angular a
  selector: ".app-root",

  // any one of below template or templateUrl is required
  templateUrl: './app.component.html',
  // "template":`<h1> This is inline template in template key in ts file </h1>`,

  // this is arrya of css files
  styleUrls: ['./app.component.css']
  // styles:[`
            // h1 {
              // color: red;
            // }`]
})
export class AppComponent {
  username = ''
  title = 'app-two';
}
