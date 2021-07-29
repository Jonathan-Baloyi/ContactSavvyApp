import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IContact } from 'src/app/models/IContact';
import { IModalWrapper } from 'src/app/models/IModalWrapper';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: []
})
export class ModalContentComponent implements OnInit {

  @Input() modalWrapper: IModalWrapper;
  isSaveAction = false;
  isUpdateAction = false;
  isDeleteAction = false;
  ngForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {

    this.ngForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required]],
      address: ['']
    });

    if (this.modalWrapper.action.toLowerCase() == 'add')
      this.isSaveAction = true;

    if (this.modalWrapper.action.toLowerCase() == 'edit') {
      this.isUpdateAction = true;

      //set the values for the controls during initialisation
      this.f.name.setValue(this.modalWrapper.contact.name);
      this.f.surname.setValue(this.modalWrapper.contact.surname);
      this.f.mobile.setValue(this.modalWrapper.contact.mobile);
      this.f.email.setValue(this.modalWrapper.contact.email);
      this.f.address.setValue(this.modalWrapper.contact.address);
    }

    if (this.modalWrapper.action.toLocaleLowerCase() == 'delete') {
      this.isDeleteAction = true;
      this.ngForm.updateValueAndValidity({ emitEvent: true });
    }

  }

  get f() {
    return this.ngForm.controls;
  }

  saveUpdateDeleteContact() {
    const contact: IContact = {
      email: this.f.email.value.toLowerCase().trim(),
      mobile: this.f.mobile.value,
      name: this.f.name.value,
      surname: this.f.surname.value,
      address: this.f.address.value
    }

    // To Do: Once the model is built, a contact is ready to be saved

  }

}
