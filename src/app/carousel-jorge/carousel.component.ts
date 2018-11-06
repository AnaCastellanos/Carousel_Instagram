import { Component} from '@angular/core';
import {InstagramService} from '../instagram.service';

@Component ({
  selector: 'app-carousel-jorge',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  images2: string [] = [];


  constructor(public instaService: InstagramService) {
    this.getImages();
  }

  getImages() {
    this.instaService.getData().subscribe( data => {
      for (let i = 0; i < 3; i++) {
        this.images2[i] = data.data[i].images.standard_resolution.url;
      }
    });
  }

}
