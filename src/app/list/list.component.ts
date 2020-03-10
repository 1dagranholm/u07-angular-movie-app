import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  movies: Object;

  constructor(
    private _http: HttpService
  ) {}

  ngOnInit() {
    this._http.getMovies().subscribe(data => {
      this.movies = data['results'];
    });
  }

}
