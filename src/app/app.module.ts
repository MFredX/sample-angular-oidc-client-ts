import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/components/app.component';
import { HomeComponent } from './core/components/home.component';
import { SigninCallbackComponent } from './core/components/signin-callback.component';
import { SilentSigninCallbackComponent } from "./core/components/silent-signin-callback.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninCallbackComponent,
    SilentSigninCallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
