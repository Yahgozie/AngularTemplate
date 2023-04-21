import { Component, OnInit } from '@angular/core';
import { Movie, MovieVideo } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  // movies!: Movie; //I just found out this does not work with subscribe callback button
  movies: Movie[] = []; //You must initiate what you are trying to call

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getPagedMovies(1);
  }



  getPagedMovies(page: number) {
    this.moviesService.searchMovies(page).subscribe((movies) => {
      this.movies = movies;
    });
  }

  onPageChange(event: any) {
    this.getPagedMovies(event.page + 1);
  }

}
