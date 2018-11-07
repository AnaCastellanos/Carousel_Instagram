import { Component } from '@angular/core';
import { InstagramJorgeService } from '../instagram.jorge.service';

@Component ({
  selector: 'app-carousel-jorge',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images: any [] = [];

  constructor(public instaService: InstagramJorgeService) {
    this.getImages();
  }

  getImages() {
    this.instaService.getData().subscribe( data => {
      for(let image of data.data) {
        this.images.push(image);
      }
    }, error => console.log(error));
  }

}
