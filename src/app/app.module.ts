import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchmedicineComponent } from './components/searchmedicine/searchmedicine.component';
import { FetchmedicineComponent } from './components/fetchmedicine/fetchmedicine.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchmedicineComponent,
    FetchmedicineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
