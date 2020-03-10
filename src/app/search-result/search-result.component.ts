import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  searches: Object;

  constructor(
    private _http: HttpService
  ) {}

  ngOnInit() {
    this._http.getSearch().subscribe(data => {
      this.searches = data['results'];
      console.log(this.searches);
    });
  }

}
