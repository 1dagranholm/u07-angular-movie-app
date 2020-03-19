import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-trending-movies",
  templateUrl: "./trending-movies.component.html",
  styleUrls: ["./trending-movies.component.scss"]
})
export class TrendingMoviesComponent implements OnInit {

  movies: any;
  genres: any;

  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this._http.getTrendingMovies().subscribe(data => {
      this.movies = data["results"];
    });
  }
}
