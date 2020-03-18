import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: any;
  series: any;

  constructor(
    private _http: HttpService,
    private router: Router
  ) {}

  ngOnInit() {
    this._http.getPopularMovies().subscribe(data => {
      this.movies = data['results'];
    });

    this._http.getTrendingTV().subscribe(data => {
      this.series = data["results"];
    });
  }

  submitForm(form) {
    if(!form.value.search) return;
    this.router.navigate(['/search-result', form.value.search])
  }
}
