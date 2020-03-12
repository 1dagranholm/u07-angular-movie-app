import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  search: Object;
  movies: Object;
  actors: Object;
   
  constructor(
    private _http: HttpService,
    private router: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.search = params.get('search');
    });

    this._http.searchMovies(this.search).subscribe(data => {
      this.movies = data['results'];
    });

    this._http.searchActors(this.search).subscribe(data => {
      this.actors = data['results'];
    });
  }
}
