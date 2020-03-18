import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-view-tv',
  templateUrl: './view-tv.component.html',
  styleUrls: ['./view-tv.component.scss']
})
export class ViewTvComponent implements OnInit {

  tv: any;
  tvId: number;

  constructor(
    private _http: HttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.tvId = parseInt(params.get('id'));
    });
 
    this._http.getTV(this.tvId).subscribe(data => {
      this.tv = data;
    });
  }
}