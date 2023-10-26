import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recapitulatif-donnees',
  templateUrl: './recapitulatif-donnees.component.html',
  styleUrls: ['./recapitulatif-donnees.component.css']
})
export class RecapitulatifDonneesComponent {
  @Input() donneesSaisies: any;
}
