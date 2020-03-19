import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-view-actor',
  templateUrl: './view-actor.component.html',
  styleUrls: ['./view-actor.component.scss']
})
export class ViewActorComponent implements OnInit {

  actor: any;
  actorId: number;
  gender: any;
  movies: any;
  tv: any;

  constructor(
    private _http: HttpService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.actorId = parseInt(params.get('id'));
    });
 
    this._http.getActor(this.actorId).subscribe(data => {
      this.actor = data;
    });

    this.gender = ['Undefined', 'Woman', 'Man']

    this._http.getActorMovies(this.actorId).subscribe(data => {
      this.movies = data['cast'];
    });

    this._http.getActorTv(this.actorId).subscribe(data => {
      this.tv = data['cast'];
    });
  }
}