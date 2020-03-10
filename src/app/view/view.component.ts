import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  movies: Object;

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