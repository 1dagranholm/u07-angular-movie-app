import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { TrendingTvComponent } from './trending-tv/trending-tv.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { ViewTvComponent } from './view-tv/view-tv.component';
import { ViewActorComponent } from './view-actor/view-actor.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'trending-tv', component: TrendingTvComponent },
  { path: 'search-result/:search', component: SearchResultComponent },
  { path: 'view-movie/:id', component: ViewMovieComponent },
  { path: 'view-tv/:id', component: ViewTvComponent },
  { path: 'view-actor/:id', component: ViewActorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
