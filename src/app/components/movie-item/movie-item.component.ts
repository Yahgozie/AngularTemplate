import { Component, Input } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constants/image-sizes';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {
  // @Input() itemData: Movie | null = null;
  @Input() itemData!: Movie;
  imagesSizes = IMAGES_SIZES;
  
}
