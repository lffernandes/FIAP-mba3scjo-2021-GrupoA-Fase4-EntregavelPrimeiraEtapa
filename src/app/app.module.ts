import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { ListasComprasComponent } from './components/listas-compras/listas-compras.component';
import { NavbarComponent } from './components/navbar/navbar.components';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    ListasComprasComponent,
    NavbarComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
