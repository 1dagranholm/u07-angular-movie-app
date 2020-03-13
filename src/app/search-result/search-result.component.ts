import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  search: Object;
  movies: Object;
  actors: Object;
  parameters: string;
   
  constructor(
    private _http: HttpService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activeRouter.params.subscribe(params => {
      this.parameters = params.search 
      
      this._http.searchMovies(params.search).subscribe(data => {
        this.movies = data['results'];
      });

      this._http.searchActors(params.search).subscribe(data => {
        this.actors = data['results'];
      });
    });
  }

  submitForm(form) {
    if(!form.value.search) return;
    this.router.navigate(['/search-result', form.value.search])
  }
}
