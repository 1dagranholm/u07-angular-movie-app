import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(
    private http: HttpClient,
  ) {}

  private startUrl = 'https://api.themoviedb.org/3/';
  private apiKey: string = '4e3efe747364cf6327c7a85cefbf7c59';

  getPopularMovies() {
    let apiUrl = 'discover/movie';
    let param = 'sort_by=popularity.desc';

    return this.http.get(
      this.startUrl + apiUrl + '?' + param + '&api_key=' + this.apiKey + '&language=en-US&page=1'
    );
  }

  getMovie(id: number) {
    let apiUrl = 'movie';

    return this.http.get(
      this.startUrl + apiUrl + '/' + id + '?api_key=' + this.apiKey + '&language=en-US'
    );
  }

  getActorsInMovie(id: number) {
    let apiUrl = 'movie';

    return this.http.get(
      this.startUrl + apiUrl + '/' + id + '/credits?api_key=' + this.apiKey
    );
  }

  getActor(id: number) {
    let apiUrl = 'person';

    return this.http.get(
      this.startUrl + apiUrl + '/' + id + '?api_key=' + this.apiKey + '&language=en-US'
    );
  }
  
  getActorMovies(id: number) {
    let apiUrl = 'person';

    return this.http.get(
      this.startUrl + apiUrl + '/' + id + '/combined_credits?api_key=' + this.apiKey + '&language=en-US'
    );
  }

  searchActors(search: any) {
    let apiUrl = 'search/person';
 
    return this.http.get(
      this.startUrl + apiUrl + '?api_key='+ this.apiKey + '&language=en-US&page=1&include_adult=false&query=' + search
    );
  }

  searchMovies(search: any) {
    let apiUrl = 'search/movie';
 
    return this.http.get(
      this.startUrl + apiUrl + '?api_key='+ this.apiKey + '&language=en-US&query=' + search + '&page=1&include_adult=false'
    );
  }
}
