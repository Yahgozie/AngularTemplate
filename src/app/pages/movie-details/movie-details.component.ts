import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit{

  movie: Movie | null = null; //member fields should always be defined before the constructor.
 
  constructor(private route: ActivatedRoute, private moviesService: MoviesService){}

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      this.getMovieDetail(id);
    });
  }

  getMovieDetail(id: string){
    this.moviesService.getMovieDetails(id).subscribe((movieData) => {
      this.movie = movieData;
      console.log(this.movie);
    })
  }

}
