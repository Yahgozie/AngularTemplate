import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];

  constructor(private moviesService: MoviesService){}

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((movies)=>{
      this.popularMovies = movies;      
    }); 
    
    this.moviesService.getMovies('top_rated').subscribe((movies)=>{
      this.topRatedMovies = movies;     
    });

    this.moviesService.getMovies('upcoming').subscribe((movies)=>{
      this.upcomingMovies = movies;      
    });
  }

}
