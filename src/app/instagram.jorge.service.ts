import {Http, Response} from '@angular/http';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class InstagramJorgeService {
  private apiUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=4536554789.0dc7b40.fb494b1d649f4b48ab78b0afcf5bdaa7';

  constructor(public http: Http) {
  }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl)
      .pipe(map ((res: Response) => res.json()));
  }

}
