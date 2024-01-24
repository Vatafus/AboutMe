import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './WelcomePage/welcomepage/welcomepage.component';
import { NavigationbarComponent } from './NavigationBar/navigationbar/navigationbar.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    NavigationbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
