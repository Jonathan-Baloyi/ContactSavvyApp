import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IContact } from 'src/app/models/IContact';
import { IModalWrapper } from 'src/app/models/IModalWrapper';
import { ContactService } from 'src/app/services/contact.service';
import { ModalContentComponent } from '../../shared/modal-content/modal-content.component';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: []
})
export class ContactsListComponent implements OnInit {

  contacts: IContact[] = [];
  alphabetList: String[] = [];
  mobileChecked = true;
  emailChecked = false;
  bodyText: string;
  constructor(private contactService: ContactService, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.bodyText = 'This text can be updated in modal 1';

    this.contactService.getContacts().subscribe(val => {
      this.contacts = val;
      this.extractFirstLetters(this.contacts);
    });
  }

  open(action: string, contact: IContact = { name: "", surname: "", email: "", imageUrl: "", mobile: "" }) {
    const modalRef = this.modalService.open(ModalContentComponent);

    const modalWrapper: IModalWrapper = {
      action: action,
      contact: contact
    }

    modalRef.componentInstance.modalWrapper = modalWrapper;
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
