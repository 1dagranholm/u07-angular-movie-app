import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { SearchResultComponent } from './search-result/search-result.component';

import { HttpClientModule } from '@angular/common/http';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { ViewActorComponent } from './view-actor/view-actor.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TrendingTvComponent } from './trending-tv/trending-tv.component';
import { ViewTvComponent } from './view-tv/view-tv.component';
import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    SearchResultComponent,
    ViewMovieComponent,
    ViewActorComponent,
    TrendingTvComponent,
    ViewTvComponent,
    TrendingMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
