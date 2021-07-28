import { Component, OnInit, Input } from '@angular/core';
import { IMenu } from 'src/app/models/IMenu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {

  @Input()
  public menuItems: IMenu[];

  constructor() { }

  ngOnInit(): void {
  }

}
