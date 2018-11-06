import {Http, Response} from '@angular/http';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class InstagramService {
  private apiUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=7178834128.4c08053.167617dceb924381bd8606509a2ad0f1';
  data: any = {};

  constructor(public http: Http) {
    this.getData();
    this.importData();
  }

  getData() {
    return this.http.get(this.apiUrl)
      .pipe(map ((res: Response) => res.json()));
  }

  importData() {
    this.getData().subscribe(data => {
      this.data = data;
    });
  }

}
