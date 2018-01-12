import { Component } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { from } from 'rxjs/observable/from';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  <h1>{{title}}</h1>
  <div style="margin:100px;">
  <nav class="navbar navbar-inverse navbar-static-top">
<div class="container">
  <a class="navbar-brand" href="/">Express HTML</a>
  <ul class="nav navbar-nav">
    <li class="active">
      <a [routerLink]="['/people']">People</a>
    </li>
    <li>
    <a [routerLink]="['/country']">Country</a>
    </li>
    <li>
    <a [routerLink]="['/countryFlag']">CountryFlag</a>
    </li>
  </ul>
</div>
</nav>
  <div class="jumbotron" style="width:100%;">
      <router-outlet></router-outlet>
  </div>
</div>

  <!--<ul style="width:100%;height:25px;background-color:red;list-style-type:none;">
    <li class="active" style="float:left;">
          <a [routerLink]="['/people']" style="color:white;">People</a>
    </li>
    <li style="float:left;margin-left:25px;">
          <a [routerLink]="['/country']" style="color:white;">Country</a>
    </li>

    <li style="float:left;margin-left:25px;">
          <a [routerLink]="['/countryFlag']" style="color:white;">CountryFlag</a>
    </li>
  </ul><p>The following point needs to be noted about the above program -
  
  <router-outlet></router-outlet> is the placeholder to render the component based on which option the user chooses.
  
  Now, save all the code and run the application using npm. Go to the browser, you will see the following output.</p>
  
  <router-outlet></router-outlet>-->
  
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 app works Fine';
}
