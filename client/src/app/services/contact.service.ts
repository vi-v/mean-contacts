import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Contact } from '../contact';
import 'rxjs/add/operator/map'

@Injectable()
export class ContactService {

  constructor(private _http: Http) { }

}
