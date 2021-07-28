import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/IContact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: []
})
export class ContactsListComponent implements OnInit {

  contacts: IContact[] = [];
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {

    this.contactService.getContacts().subscribe(val => {
      this.contacts = val;
    });
  }

}
