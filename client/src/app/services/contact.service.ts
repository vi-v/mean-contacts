import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Contact } from '../contact';
import 'rxjs/add/operator/map'

@Injectable()
export class ContactService {

  constructor(private _http: Http) {
    console.log('contacts service is ready ...');
  }

  //retrieving contacts
  getContacts() {
    return this._http.get('http://localhost:3000/api/contacts')
      .map( res => res.json());
  }

  //Add contact
  addContact(newContact: Contact) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.post('http://localhost/api/contact', newContact, {headers: headers})
      .map(res => res.json());
  }

  //Delete contact
  deleteContact(id: string) {
    return this._http.delete('http://localhost:3000/contact'+id)
      .map(res => res.json());
  }

}
