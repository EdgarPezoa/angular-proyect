import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms/';

// Services
import { ProductosService } from './services/productos.service';
import { EnvironmentService } from './services/environment.service';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { HomeComponent } from './page/content/home/home.component';
import { NosotrosComponent } from './page/content/nosotros/nosotros.component';
import { ContactoComponent } from './page/content/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NosotrosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ProductosService,
    EnvironmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
