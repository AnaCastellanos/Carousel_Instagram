import {Http, Response} from '@angular/http'; //Librería
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

import { Observable } from 'rxjs';


@Injectable()
export class InstagramChrisService { //Servicio: Manejo de datos externos en forma de json.
  private apiUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=7178834128.4c08053.167617dceb924381bd8606509a2ad0f1';
  constructor(public http: Http) {}
  getData(): Observable<any> {
    return this.http.get(this.apiUrl)
      .pipe(map ((res: Response) => res.json()));
  }
}
