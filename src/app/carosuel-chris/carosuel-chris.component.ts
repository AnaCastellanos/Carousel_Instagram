import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-carosuel-chris',
  templateUrl: './carosuel-chris.component.html',
  styleUrls: ['./carosuel-chris.component.css']
})
export class CarosuelComponent implements OnInit {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  image2: string [] = [];
  private apiUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=7178834128.4c08053.167617dceb924381bd8606509a2ad0f1';
  data: any = {};
  constructor(private http: Http) {
    this.getData();
    this.importData();
    this.getImages();
}
  ngOnInit() {
  }
  getData() {
    return this.http.get(this.apiUrl)
      .pipe(map ((res: Response) => res.json()));
  }
  importData() {
    this.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }
  getImages() {
    this.getData().subscribe( data => {
      for (let i = 0; i < 3; i++) {
        this.image2[i] = this.data.data[i].images.standard_resolution.url;
        console.log(this.image2[i]);
      }
    });
  }
}
