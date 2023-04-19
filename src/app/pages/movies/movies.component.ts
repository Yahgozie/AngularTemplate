import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit{
  // movies!: Movie; //I just found out this does not work with subscribe callback button
  movies: Movie[] = []; //You must initiate what you are trying to call
  constructor(private moviesService: MoviesService){}

  ngOnInit(): void {
    this.moviesService.searchMovies(4).subscribe((movies)=> {
      this.movies = movies
    });
  }

}
