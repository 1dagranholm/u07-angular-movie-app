import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(
    private http: HttpClient,
  ) {}

  // General set up fpr The Movie Database API
  private startUrl = 'https://api.themoviedb.org/3/';
  private apiKey: string = '?api_key=4e3efe747364cf6327c7a85cefbf7c59';
  private langUs: string = '&language=en-US';

  getPopularMovies() {
    let apiUrl = 'discover/movie';
    let param = 'sort_by=popularity.desc';

    return this.http.get(
      this.startUrl + apiUrl + '?' + param + this.apiKey + this.langUs + '&page=1'
    );
  }

  getTrendingMovies() {
    let apiUrl = 'trending/movie'
    let param = 'week' // Options: day / week

    return this.http.get(
    this.startUrl + apiUrl + '/' + param + this.apiKey
    );
  }

  getTrendingTV() {
    let apiUrl = 'trending/tv'
    let param = 'week' // Options: day / week

    return this.http.get(
    this.startUrl + apiUrl + '/' + param + this.apiKey
    );
  }

  getTV(id: number) {
    let apiUrl = 'tv';

    return this.http.get(
      this.startUrl + apiUrl + '/' + id + this.apiKey + this.langUs
    );
  }

  getMovie(id: number) {
    let apiUrl = 'movie';

    return this.http.get(
      this.startUrl + apiUrl + '/' + id + this.apiKey + this.langUs
    );
  }

  getActorsInMovie(id: number) {
    let apiUrl = 'movie';
    let param = '/credits';

    return this.http.get(
      this.startUrl + apiUrl + '/' + id + param + this.apiKey
    );
  }

  getActor(id: number) {
    let apiUrl = 'person';

    return this.http.get(
      this.startUrl + apiUrl + '/' + id + this.apiKey + this.langUs
    );
  }
  
  getActorMovies(id: number) {
    let apiUrl = 'person';
    let param = '/combined_credits';

    return this.http.get(
      this.startUrl + apiUrl + '/' + id + param + this.apiKey + this.langUs
    );
  }

  getActorTv(id: number) {
    let apiUrl = 'person';
    let param = '/tv_credits';

    return this.http.get(
      this.startUrl + apiUrl + '/' + id + param + this.apiKey + this.langUs
    );
  }

  searchActors(search: any) {
    let apiUrl = 'search/person';
 
    return this.http.get(
      this.startUrl + apiUrl + this.apiKey + this.langUs + '&page=1&include_adult=false&query=' + search
    );
  }

  searchMovies(search: any) {
    let apiUrl = 'search/movie';
 
    return this.http.get(
      this.startUrl + apiUrl + this.apiKey + this.langUs + 'query=' + search + '&page=1&include_adult=false'
    );
  }

  searchTv(search: any) {
    let apiUrl = 'search/tv';
 
    return this.http.get(
      this.startUrl + apiUrl + this.apiKey + this.langUs + '&query=' + search + '&page=1&include_adult=false'
    );
  }

  getTvGenres() {
    let apiUrl = 'genre/tv/list';

    return this.http.get(
      this.startUrl + apiUrl + this.apiKey + this.langUs
    );
  }

  getMovieGenres() {
    let apiUrl = 'genre/movie/list';

    return this.http.get(
      this.startUrl + apiUrl + this.apiKey + this.langUs
    );
  }
}
