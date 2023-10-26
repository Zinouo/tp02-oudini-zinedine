import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire-client',
  templateUrl: './formulaire-client.component.html',
  styleUrls: ['./formulaire-client.component.css']
})
export class FormulaireClientComponent {
  nom: string = '';
  prenom: string = '';
  adresse: string = '';
  cp: number | null = null;
  ville: string = '';
  email: string = '';
  telephone: string = '';
  civilite: string = '';
  password: string = '';
  login: string = '';
  pays: string = '';

  confirmationMessage: string = '';

  onSubmit() {
    console.log('Nom:', this.nom);
    this.confirmationMessage = `Vous avez entré les informations suivantes :
    
      Nom : ${this.nom}
      Prénom : ${this.prenom}
      Adresse : ${this.adresse}
      Code postal : ${this.cp}
      Ville : ${this.ville}
      Email : ${this.email}
      Téléphone : ${this.telephone}
      Civilité : ${this.civilite}
      Mot de passe : ${this.password}
      Login : ${this.login}
      Pays : ${this.pays}`;
  }
}
