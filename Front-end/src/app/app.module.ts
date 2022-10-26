import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginListComponent } from './components/login-list/login-list.component';

import { LoginService } from './services/login.service'
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginFormComponent,
    LoginListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
