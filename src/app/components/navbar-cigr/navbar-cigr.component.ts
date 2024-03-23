import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cigr-navbar-cigr',
  templateUrl: './navbar-cigr.component.html',
  styleUrls: ['./navbar-cigr.component.css']
})
export class NavbarCigrComponent implements OnInit {
  @Input()titulo:string;

  constructor() {
    this.titulo=";"
   }

  ngOnInit(): void {
  }

}
