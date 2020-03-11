import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: any;

  constructor(
    private _http: HttpService
  ) {}

  ngOnInit() {
    this._http.getMovies().subscribe(data => {
      this.movies = data['results'];
      console.log(this.movies);
    });
  }

}
