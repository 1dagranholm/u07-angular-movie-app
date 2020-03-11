import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.scss']
})
export class ViewMovieComponent implements OnInit {

  movie: any;

  constructor(
    private _http: HttpService,
  ) {}

  ngOnInit() {
    this._http.getMovie().subscribe(data => {
      this.movie = data;
      console.log(this.movie);
    });
  }

}