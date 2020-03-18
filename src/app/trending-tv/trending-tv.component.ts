import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-trending-tv",
  templateUrl: "./trending-tv.component.html",
  styleUrls: ["./trending-tv.component.scss"]
})
export class TrendingTvComponent implements OnInit {
  series: any;
  genres: any;
  genreArray: any = [];
  missingGenres: any;
  missing: any;

  constructor(private _http: HttpService) {}

  ngOnInit() {
    this._http.getTrendingTV().subscribe(data => {
      this.series = data["results"];
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

    this._http.getTVGenres().subscribe(data => {
      for (let genre in data["genres"]) {
        let genreStructure = data["genres"][genre];
        this.genreArray[genreStructure.id] = genreStructure.name;
      }

      for (let missing in missingGenres) {
        let genreStructure = missingGenres[missing];
        this.genreArray[genreStructure.id] = genreStructure.name;
      }
    });
  }
}
