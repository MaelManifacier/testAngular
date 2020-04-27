import { Component, OnInit } from '@angular/core';
import { MatDatepicker } from '@angular/material';
import { FormControl } from '@angular/forms';

import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { FraisMois } from '../model/FraisMois';
import { FRAISMOIS } from '../mock/mock-frais-mois';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  title = "gestion des frais"
  retour = ""
  iconType = "home"

  date : Date;

  fraisMois : FraisMois[]
  datesMois : string[] = []
  stringMois : string[] = [
    "Janvier"
    , "Fevrier"
    , "Mars"
    , "Avril"
    , "Mai"
    , "Juin"
    , "Juillet"
    , "Août"
    , "Septembre"
    , "Octobre"
    , "Novembre"
    , "Decembre"
  ]
  fraisMoisString : string[] = []


  constructor() { }

  ngOnInit() {
    this.getFraisMois()

    // Remplit la liste pour créer les liens vers la page selection-jour
    //console.log(this.fraisMois[0].mois.replace(/\//ig, "-"))
    for(let i = 0; i < this.fraisMois.length; i++) {
      this.datesMois[i] = this.fraisMois[i].mois.replace(/\//ig, "-")
      //console.log(this.fraisMois[i].mois.substr(this.fraisMois[i].mois.indexOf('/') + 1, this.fraisMois[i].mois.indexOf('/')))
      this.fraisMoisString[i] = this.stringMois[ parseInt(this.fraisMois[i].mois.substr(3, 2)) -1] + " " + this.fraisMois[i].mois.substring(this.fraisMois[i].mois.length - 4)
    }
  }

  getFraisMois() {
    //appeler le service ici
    this.fraisMois = FRAISMOIS
  }

  choixAnnee(date : Date) {
    this.date.setFullYear(date.getFullYear())
  }

  choixMois(date : Date, monthYearPicker : MatDatepicker<Date>) {
    this.date.setMonth(date.getMonth())
    monthYearPicker.close()
    console.log(this.date.toDateString().split(' ')[1] + ' ' + this.date.toDateString().split(' ')[3])
  }

}


/*
https://stackblitz.com/angular/dnnjropllpel?file=src%2Fapp%2Fdatepicker-views-selection-example.ts
https://blog.angular.io/taking-advantage-of-the-angular-material-datepicker-237e80fa14b3

export const DATE_FORMAT = {
  parse: {
    dateInput: 'MM/YYYY'
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
}

class MomentDateAdapter extends DateAdapter<Moment> {
  parse(value: any, parseFormat: any): Moment {
    return moment(value, parseFormat);
  }
}
*/
