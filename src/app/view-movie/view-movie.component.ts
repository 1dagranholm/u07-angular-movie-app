import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.scss']
})
export class ViewMovieComponent implements OnInit {

  movie: any;
  movieId: number;
  cast: any;

  constructor(
    private _http: HttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.movieId = parseInt(params.get('id'));
    });
 
    this._http.getMovie(this.movieId).subscribe(data => {
      this.movie = data;
      console.log(data);
    });

    this._http.getActorsInMovie(this.movieId).subscribe(data => {
      this.cast = data['cast'];
    });
  }
}