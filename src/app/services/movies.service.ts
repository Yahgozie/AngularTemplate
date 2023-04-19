import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieDto } from '../models/movie';
import { of, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'e70a928eb1700a98910f74798b6ee579';

  constructor(private http: HttpClient) { }
  getMovies(type: string = 'upcoming', count: number = 12){
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(switchMap(res => {
      return of(res.results.slice(0, count));
    }));
  }

  searchMovies(page: number){
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`).pipe(switchMap(res => {
      return of(res.results);
    }));
  }

  getMovieDetails(id: string){
    return this.http.get<Movie>(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`
    );
  }

  // getTvs(type: string = 'latest', count: number = 12){
  //   return this.http.get<TvDto>(`${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`).pipe(switchMap(res => {
  //     return of(res.results.slice(0, count));
  //   }));
  // }

}



