import { Component } from '@angular/core';
<<<<<<< HEAD
import {InstagramJorgeService} from '../instagram.jorge.service';
=======
import { InstagramService } from '../instagram.service';
>>>>>>> 229c2bbc4289ea7db311cad6ef40c6dab9e4b929

@Component ({
  selector: 'app-carousel-jorge',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images: any [] = [];

<<<<<<< HEAD
  constructor(public instaService: InstagramJorgeService) {
=======
  constructor(public instaService: InstagramService) {
>>>>>>> 229c2bbc4289ea7db311cad6ef40c6dab9e4b929
    this.getImages();
  }

  getImages() {
    this.instaService.getData().subscribe( data => {
<<<<<<< HEAD
      for (let image of data.data) {
        this.images.push(image);
      }
=======
      for(let image of data.data)
        this.images.push(image);
>>>>>>> 229c2bbc4289ea7db311cad6ef40c6dab9e4b929
    }, error => console.log(error));
  }

}
