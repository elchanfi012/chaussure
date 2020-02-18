import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule }   from '@angular/forms';
import { ChaussureComponent } from './components/chaussure/chaussure.component';
import { ChaussureDetailComponent } from './components/chaussure-detail/chaussure-detail.component';
import { AddChaussureComponent } from './components/add-chaussure/add-chaussure.component';
import { EditChaussreComponent } from './components/edit-chaussre/edit-chaussre.component';
import { MenuComponent } from './components/menu/menu.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChaussureComponent,
    ChaussureDetailComponent,
    AddChaussureComponent,
    EditChaussreComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    CommonModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
