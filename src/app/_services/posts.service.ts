import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  getPostList(): Observable<object> {
    return this.http.get(`${environment.apiUrl}/posts`);
  }
}
