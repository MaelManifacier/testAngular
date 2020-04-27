import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TypeFrais } from '../model/TypeFrais';
import { Frais } from '../model/Frais';

@Component({
  selector: 'app-formulaire-ajout-frais',
  templateUrl: './formulaire-ajout-frais.component.html',
  styleUrls: ['./formulaire-ajout-frais.component.scss']
})
export class FormulaireAjoutFraisComponent implements OnInit {

  @Input() dateFrais : string
  @Input() frais : Frais

  @Output() sendFrais = new EventEmitter<Frais>()

  typeFrais: TypeFrais [] = [
    {
      No: 1,
      type: 'repas midi'
    },
    {
      No: 2,
      type: 'repas soir'
    },
    {
      No: 3,
      type: 'soirée étape'
    }
  ]

  selectedType: string;
  remboursementAuSeuil: false;

  constructor() { }

  ngOnInit() {
    if(this.dateFrais == undefined) {
      //this.dateFrais = new Date()
    }

    // si on "préremplit" selon le type de frais, cela permet d'afficher des erreurs ou d'interdire certaines choses, mais besoin vérif côté serveur ds ts les cas
    if(this.frais == undefined) {
      this.frais = {
        typeFrais: ''
        , montant: 13.50
        , nbKm: null
        , justificationDepassement: ''
        , remboursementAuSeuil: false
        , moyenPaiement: 0
        , facture: [
          'hey',
          'bouh'
        ]
      }
    }

  }

}
