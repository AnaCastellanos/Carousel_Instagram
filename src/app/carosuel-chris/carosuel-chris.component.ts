import { Component,  } from '@angular/core';
import {InstagramChrisService} from '../instagram-chris.service';
@Component({
  selector: 'app-carosuel-chris',
  templateUrl: './carosuel-chris.component.html',
  styleUrls: ['./carosuel-chris.component.css']
})
export class CarosuelComponent{
  images = [1, 2, 3, 4, 5, 6].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  image2: string [] = [];

  constructor(public instaService: InstagramChrisService) {
    this.getImages();
  }

  getImages() {
    this.instaService.getData().subscribe(data => {
      for (let i = 0; i < 8; i++) {
        this.image2[i] = data.data[i].images.standard_resolution.url;
      }
    });
  }
}
