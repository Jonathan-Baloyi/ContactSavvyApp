import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { IMenu } from 'src/app/models/IMenu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  menuItems: IMenu[] = [];
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe(val => {
      this.menuItems = val;
    });
  }

}
