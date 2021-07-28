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
  alphabetList: String[] = [];
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {

    this.contactService.getContacts().subscribe(val => {
      this.contacts = val;
      this.extractFirstLetters(this.contacts);
    });
  }

  extractFirstLetters(contacts: IContact[]) {
    contacts.forEach(item => {
      const firstLetter = item.name.charAt(0);
      console.log(firstLetter);

      if (this.alphabetList.indexOf(firstLetter) == -1) {
        this.alphabetList.push(firstLetter);
      }
    })
  }
}
