import { Component } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(
    private route: Router
  ) { }
  
  title = 'u07-angular-movie-app';
  
  submitForm(form){
    this.route.navigate(['/search-result', form.value.search])
  };
}