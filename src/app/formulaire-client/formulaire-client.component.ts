import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire-client',
  templateUrl: './formulaire-client.component.html',
  styleUrls: ['./formulaire-client.component.css']
})
export class FormulaireClientComponent {
  client: any = {
    prenom: '',
    adresse: '',
    cp: null,
    ville: '',
    email: '',
    telephone: '',
    civilite: '',
    password: '',
    login: '',
    pays: ''
  };

  confirmationMessage: string = '';
  nom : string = '';

  onSubmit() {
    this.confirmationMessage = `Vous avez entré les informations suivantes :
      Nom : ${this.nom}
      Prénom : ${this.client.prenom}
      Adresse : ${this.client.adresse}
      Code postal : ${this.client.cp}
      Ville : ${this.client.ville}
      Email : ${this.client.email}
      Téléphone : ${this.client.telephone}
      Civilité : ${this.client.civilite}
      Mot de passe : ${this.client.password}
      Login : ${this.client.login}
      Pays : ${this.client.pays}`;
  }
}
