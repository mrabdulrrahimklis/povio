import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from "@ngrx/store";
import { valueReducer } from "./store/reducers/value.reducer";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCoinsComponent } from './list-coins/list-coins.component';
import { HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ListCoinsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ value: valueReducer })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
