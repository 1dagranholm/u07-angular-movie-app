import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(
    private http: HttpClient
  ) {}

  getPopularMovies() {
    let apiUrl = 'https://api.themoviedb.org/3/discover/movie';
    let param = 'sort_by=popularity.desc';
    let apiKey = '4e3efe747364cf6327c7a85cefbf7c59';

    return this.http.get(
      apiUrl + '?' + param + '&api_key=' + apiKey + '&language=en-US&page=1'
    );
  }

  getMovie(id: number) {
    let apiUrl = 'https://api.themoviedb.org/3/movie/';
    let apiKey = '4e3efe747364cf6327c7a85cefbf7c59';

    return this.http.get(
      apiUrl + id + '?api_key=' + apiKey + '&language=en-US'
    );
  }

  getActorsInMovie(id: number) {
    let apiUrl = 'https://api.themoviedb.org/3/movie/';
    let apiKey = '4e3efe747364cf6327c7a85cefbf7c59';

    return this.http.get(
      apiUrl + id + '/credits?api_key=' + apiKey
    );
  }

  getActor(id: number) {
    let apiUrl = 'https://api.themoviedb.org/3/person/';
    let apiKey = '4e3efe747364cf6327c7a85cefbf7c59';

    return this.http.get(
      apiUrl + id + '?api_key=' + apiKey + '&language=en-US'
    );
  }
  
  getActorMovies(id: number) {
    let apiUrl = 'https://api.themoviedb.org/3/person/';
    let apiKey = '4e3efe747364cf6327c7a85cefbf7c59';

    return this.http.get(
      apiUrl + id + '/combined_credits?api_key=' + apiKey + '&language=en-US'
    );
  }

  searchActors(search: any) {
    let apiUrl = 'https://api.themoviedb.org/3/search/person';
    let apiKey = '4e3efe747364cf6327c7a85cefbf7c59';
 
    return this.http.get(
      apiUrl + '?api_key='+ apiKey + '&language=en-US&page=1&include_adult=false&query=' + search
    );
  }

  searchMovies(search: any) {
    let apiUrl = 'https://api.themoviedb.org/3/search/movie';
    let apiKey = '4e3efe747364cf6327c7a85cefbf7c59';
 
    return this.http.get(
      apiUrl + '?api_key='+ apiKey + '&language=en-US&query=' + search + '&page=1&include_adult=false'
    );
  }
}
