import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cigr-formulario-cigr',
  templateUrl: './formulario-cigr.component.html',
  styleUrls: ['./formulario-cigr.component.css']
})
export class FormularioCigrComponent implements OnInit {
  @Output() parametrosSeleccionados =new EventEmitter<any> ()
  
  categoriaSeleccionada='general';
  paisSeleccionado='mx';

  categorias:any[]=[
    {value:'general',nombre:'General'},
    {value:'business',nombre:'Negocios'},
    {value:'entertainent',nombre:'Entretenimiento'},
    {value:'health',nombre:'Salud'},
    {value:'science',nombre:'Ciencia'},
    {value:'sports',nombre:'Deportes'},
    {value:'tecnology',nombre:'Tecnologia'},
  ];

  paises:any[]=[
    {value:'mx',nombre:'Mexico'},
    {value:'ar',nombre:'argentina'},
    {value:'br',nombre:'Brasil'},
    {value:'fr',nombre:'Francia'},
    {value:'hu',nombre:'Hungria'},
    {value:'gb',nombre:'Reino Unido'},
    {value:'us',nombre:'Estados Unidos'},
    {value:'ca',nombre:'Canada'},
    {value:'co',nombre:'Colombia'},
    {value:'bg',nombre:'Bulgaria'},
    {value:'tr',nombre:'Turquia'},
    {value:'ru',nombre:'Rusia'},
    {value:'tw',nombre:'Taiwán'},
    {value:'ua',nombre:'Ucrania'},
    {value:'ve',nombre:'Venezuela'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia(){
    const PARAMETROS={
    categoria:this.categoriaSeleccionada,
    pais:this.paisSeleccionado
    }
    
  this.parametrosSeleccionados.emit(PARAMETROS);
  }

}
