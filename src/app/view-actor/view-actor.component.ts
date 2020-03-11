import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-view-actor',
  templateUrl: './view-actor.component.html',
  styleUrls: ['./view-actor.component.scss']
})
export class ViewActorComponent implements OnInit {

  actor: any;

  constructor(
    private _http: HttpService,
  ) {}

  ngOnInit() {
    this._http.getActor().subscribe(data => {
      this.actor = data;
      console.log(this.actor);
    });
  }

}