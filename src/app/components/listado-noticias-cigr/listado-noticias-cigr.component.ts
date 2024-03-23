import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cigr-listado-noticias-cigr',
  templateUrl: './listado-noticias-cigr.component.html',
  styleUrls: ['./listado-noticias-cigr.component.css']
})
export class ListadoNoticiasCigrComponent implements OnInit {
  @Input() listNoticias:any;
  

  constructor() { }

  ngOnInit(): void {
  }

}
