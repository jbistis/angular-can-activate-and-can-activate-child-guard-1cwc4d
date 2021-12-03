import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HelloComponent } from './hello.component';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, UsersComponent, UserComponent, UserDetailsComponent, HomeComponent, HeaderComponent, PlaceholderComponent, FormComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserService, AuthService]
})
export class AppModule { }
