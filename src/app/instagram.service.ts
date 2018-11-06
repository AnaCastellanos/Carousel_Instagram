import {Observable} from 'rxjs';
import {Input} from '@angular/core';
import { HttpClient} from '@angular/common/http';

export class InstagramService{
  @Input() url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=7178834128.4c08053.167617dceb924381bd8606509a2ad0f1';

}
