import { Component } from '@angular/core';
import {InstagramChrisService} from '../instagram-chris.service';
@Component({
  selector: 'app-carosuel-chris',
  templateUrl: './carosuel-chris.component.html',
  styleUrls: ['./carosuel-chris.component.css']
})
export class CarosuelChrisComponent {
  images: string [] = [];
  constructor(public instaService: InstagramChrisService) {
    this.getImages();
  }
  getImages() {
    this.instaService.getData().subscribe(data => {
      for (let image of data.data) {
        this.images.push(image);
      }
    },error => console.log(error));
  }
}
