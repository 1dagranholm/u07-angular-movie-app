import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-view-tv',
  templateUrl: './view-tv.component.html',
  styleUrls: ['./view-tv.component.scss']
})
export class ViewTvComponent implements OnInit {

  series: any;

  constructor(
    private _http: HttpService,
  ) {}

  ngOnInit() {
    this._http.getTrendingTV().subscribe(data => {
      this.series = data['results'];
    });
  }

}