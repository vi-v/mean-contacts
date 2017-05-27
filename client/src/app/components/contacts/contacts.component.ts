import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ ContactService ]
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];
  
  first_name: string;
  last_name: string;
  phone: string;

  constructor(private _contactService: ContactService) { }

  deleteContact(id: string) {
    this._contactService.deleteContact(id).subscribe( data => {
      if (data.n == 1) {
        for(var i = 0; i<this.contacts.length; i++) {
          if( this.contacts[i]._id == id) this.contacts.splice(i, 1);
        }
      }
    });
  }

  ngOnInit() {
    this._contactService.getContacts().subscribe( contacts => {
      this.contacts = contacts;
    });
  }

}
