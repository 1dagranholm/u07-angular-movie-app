import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(
    private http: HttpClient,
    private router: ActivatedRoute
  ) {}

  getPopularMovies() {
    let apiUrl = 'https://api.themoviedb.org/3/discover/movie';
    let param = 'sort_by=popularity.desc';
    let apiKey = '4e3efe747364cf6327c7a85cefbf7c59';

    return this.http.get(
      apiUrl + '?' + param + '&api_key=' + apiKey + '&language=en-US&page=1'
    );
  }

  getMovie() {
    let apiUrl = 'https://api.themoviedb.org/3/movie/';
    let id = '8413';
    let apiKey = '4e3efe747364cf6327c7a85cefbf7c59';

    return this.http.get(
      apiUrl + id + '?api_key=' + apiKey + '&language=en-US'
    );
  }

  getActor() {
    let apiUrl = 'https://api.themoviedb.org/3/person/';
    let id = '1810';
    let apiKey = '4e3efe747364cf6327c7a85cefbf7c59';

    return this.http.get(
      apiUrl + id + '?api_key=' + apiKey + '&language=en-US'
    );
  }
  
  // getSearch() {
  //   let apiUrl = 'https://api.themoviedb.org/3/search/multi';
  //   let apiKey = '4e3efe747364cf6327c7a85cefbf7c59';
   
  //   let query = this.router.queryParams.subscribe(params => {return params});
  
  //   return this.http.get(
  //     apiUrl + '?api_key='+ apiKey + '&language=en-US&query=' + query + '&page=1&include_adult=false'
  //   );
  // }
}
