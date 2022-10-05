import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DigimonLoginComponent } from './pages/digimon-login/digimon-login.component';

@NgModule({
  declarations: [
    AppComponent,
    DigimonLoginComponent
  ],
  imports: [
    BrowserModule,
		ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
