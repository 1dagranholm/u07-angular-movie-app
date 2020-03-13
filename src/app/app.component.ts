import { Component } from '@angular/core';
import {Router} from "@angular/router"
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  faHeart = faHeart;

  constructor(
    private route: Router
  ) { }
  
  title = 'u07-angular-movie-app';
  
  submitForm(form){
    if(!form.value.search) return;
    this.route.navigate(['/search-result', form.value.search])
  };
}