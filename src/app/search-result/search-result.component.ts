import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.scss"]
})
export class SearchResultComponent implements OnInit {
  search: Object;
  movies: Object;
  tv: Object;
  actors: Object;
  parameters: string;
  errorApiActors: any;
  errorApiMovies: any;
  errorApiTv: any;
  genres: any;
  genreArray: any = [];
  missingGenres: any;
  missing: any;

  constructor(
    private _http: HttpService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activeRouter.params.subscribe(params => {
      this.parameters = params.search;

      this._http.searchMovies(params.search).subscribe(data => {
        this.movies = data["results"];
        this.errorApiMovies =
          this.movies == null ||
          this.movies === 0 ||
          this.movies["length"] === 0;
      });

      this._http.searchTv(params.search).subscribe(data => {
        this.tv = data["results"];
        this.errorApiTv =
          this.tv == null || this.tv === 0 || this.tv["length"] === 0;
      });

      this._http.searchActors(params.search).subscribe(data => {
        this.actors = data["results"];
        this.errorApiActors =
          this.actors == null ||
          this.actors === 0 ||
          this.actors["length"] === 0;
      });

      // Genres missing from The Movie Database API, manual import
      let missingGenres = [
        { id: 28, name: "Action" },
        { id: 12, name: "Adventure" },
        { id: 16, name: "Animation" },
        { id: 35, name: "Comedy" },
        { id: 80, name: "Crime" },
        { id: 99, name: "Documentary" },
        { id: 10751, name: "Family" },
        { id: 14, name: "Fantasy" },
        { id: 10769, name: "Foreign" },
        { id: 36, name: "History" },
        { id: 27, name: "Horror" },
        { id: 10402, name: "Music" },
        { id: 9648, name: "Mystery" },
        { id: 10749, name: "Romance" },
        { id: 878, name: "Science Fiction" },
        { id: 10770, name: "TV movie" },
        { id: 53, name: "Thriller" },
        { id: 10752, name: "War" },
        { id: 37, name: "Western" }
      ];

      this._http.getTvGenres().subscribe(data => {
        for (let genre in data["genres"]) {
          let genreStructure = data["genres"][genre];
          this.genreArray[genreStructure.id] = genreStructure.name;
        }

        for (let missing in missingGenres) {
          let genreStructure = missingGenres[missing];
          this.genreArray[genreStructure.id] = genreStructure.name;
        }
      });
    });
  }

  submitForm(form) {
    if (!form.value.search) return;
    this.router.navigate(["/search-result", form.value.search]);
  }
}
