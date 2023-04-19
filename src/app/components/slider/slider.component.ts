import { IMAGES_SIZES } from './../../constants/image-sizes';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({opacity: 0})),
      transition('void <=> *', [animate('1s')]),
      // transition('* => void', [animate('500ms')]) //use this animation if the transition time is not the same
    ])
  ]
})
export class SliderComponent implements OnInit{  
  @Input() items: Movie[] = [];//Initialize the movie to be an empty array because it contains a list of movies.
  currentSlideIndex: number = 0; //Initializing the slide index.

  readonly imageSizes = IMAGES_SIZES;

  ngOnInit(): void {
    setInterval(() => {
      this.currentSlideIndex = ++ this.currentSlideIndex % this.items.length;
    }, 20000)
  }
  //Note 1000 is 1s
  
}
