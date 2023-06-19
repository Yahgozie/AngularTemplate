import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMAGES_SIZES } from 'src/app/constants/image-sizes';
import { Movie, MovieCredits, MovieImages, MovieVideo } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | null = null; //member fields should always be defined before the constructor.
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;
  imagesSizes = IMAGES_SIZES;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getMovieDetail(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
    });
  }

  getMovieDetail(id: string) {
    this.moviesService.getMovieDetails(id).subscribe((movieData) => {
      this.movie = movieData;
      console.log(this.movie);
    });
  }

  getMovieVideos(id: string) {
    this.moviesService
      .getMovieVideos(id)
      .subscribe((movievideoData) => (this.movieVideos = movievideoData));
  }

  getMovieImages(id: string) {
    this.moviesService
      .getMovieImages(id)
      .subscribe((movieImagesData) => (this.movieImages = movieImagesData));
  }

  getMovieCredits(id: string) {
    this.moviesService
      .getMovieCredits(id)
      .subscribe((movieImagesData) => (this.movieCredits = movieImagesData));
  }
}


