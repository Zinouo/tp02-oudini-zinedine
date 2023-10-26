import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormulaireClientComponent } from './formulaire-client/formulaire-client.component';
import { RecapitulatifDonneesComponent } from './recapitulatif-donnees/recapitulatif-donnees.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BodyComponent,
    MainComponent,
    HeaderComponent,
    LoginComponent,
    FormulaireClientComponent,
    RecapitulatifDonneesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
