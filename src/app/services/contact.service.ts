import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { IContact } from '../models/IContact';

@Injectable()
export class ContactService {
  constructor() { }

  public getContacts(): Observable<IContact[]> {
    const homeMenuItem: IContact = {
      name: 'Home',
      link: '/home',
      data: null,
      isCurrent: false,
      isDisabled: false
    };

    const menuMenuItem: IContact = {
      name: 'Menu',
      link: '/menu',
      data: null,
      isCurrent: false,
      isDisabled: false
    };

    const aboutMenuItem: IContact = {
      name: 'About',
      link: '/about',
      data: null,
      isCurrent: false,
      isDisabled: false
    };

    const contactMenuItem: IContact = {
      name: 'Contact',
      link: '/contact',
      data: null,
      isCurrent: false,
      isDisabled: false
    };

    const menuItems: IContact[] = [];
    menuItems.push(homeMenuItem);
    menuItems.push(menuMenuItem);
    menuItems.push(aboutMenuItem);
    menuItems.push(contactMenuItem);

    const res: Observable<IContact[]> = of(menuItems);
    return res;
  }
}
