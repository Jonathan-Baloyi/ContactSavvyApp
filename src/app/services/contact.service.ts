import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { IContact } from '../models/IContact';

@Injectable()
export class ContactService {
  constructor() { }

  public getContacts(): Observable<IContact[]> {
    const user1: IContact = {
      name: 'James Blue',
      imageUrl: "assets/user1.jpg",
      email: "test@test.com",
      mobile: "072555555"
    };

    const user2: IContact = {
      name: 'James Bail',
      imageUrl: "assets/user2.jpg",
      email: "test@test.com",
      mobile: "072555555"
    };

    const user3: IContact = {
      name: 'Aloe Green',
      imageUrl: "assets/user3.jpg",
      email: "test@test.com",
      mobile: "072555555"
    };

    const user4: IContact = {
      name: 'Liver benz',
      imageUrl: "assets/user4.jpg",
      email: "test@test.com",
      mobile: "072555555"
    };

    const user5: IContact = {
      name: 'Kulca bull',
      imageUrl: "assets/user5.jpg",
      email: "test@test.com",
      mobile: "072555555"
    };

    const user6: IContact = {
      name: 'Kulca Bingo',
      imageUrl: "assets/user1.jpg",
      email: "test@test.com",
      mobile: "072555555"
    };

    const menuItems: IContact[] = [];
    menuItems.push(user1);
    menuItems.push(user2);
    menuItems.push(user3);
    menuItems.push(user4);
    menuItems.push(user5);
    menuItems.push(user6);

    const res: Observable<IContact[]> = of(menuItems);
    return res;
  }
}
