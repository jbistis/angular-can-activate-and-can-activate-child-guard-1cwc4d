import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<Array<any>>(`https://jsonplaceholder.typicode.com/users`);
  }

  getUser(id) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

}