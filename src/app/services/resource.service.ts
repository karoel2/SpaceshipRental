import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ResourceService {

  constructor(public http:Http) { 
  }

  getData(){
  	return this.http.get('http://jsonplaceholder.typicode.com/users').map(res => res.json());
  }

}
 