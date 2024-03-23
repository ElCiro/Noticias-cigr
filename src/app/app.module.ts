import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormularioCigrComponent } from './components/formulario-cigr/formulario-cigr.component';
import { ListadoNoticiasCigrComponent } from './components/listado-noticias-cigr/listado-noticias-cigr.component';
import { NavbarCigrComponent } from './components/navbar-cigr/navbar-cigr.component';
import { SpinnerCigrComponent } from './shared/spinner-cigr/spinner-cigr.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormularioCigrComponent,
    ListadoNoticiasCigrComponent,
    NavbarCigrComponent,
    SpinnerCigrComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
