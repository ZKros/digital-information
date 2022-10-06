import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DigimonLoginComponent } from './pages/digimon-login/digimon-login.component';
import { DigimonListComponent } from './pages/digimon-list/digimon-list.component';
import { routing } from './app.routing';
import { DigimonSearchComponent } from './pages/digimon-search/digimon-search.component';

@NgModule({
  declarations: [
    AppComponent,
    DigimonLoginComponent,
    DigimonListComponent,
    DigimonSearchComponent
  ],
  imports: [
    BrowserModule,
		HttpClientModule,
		routing,
		ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
