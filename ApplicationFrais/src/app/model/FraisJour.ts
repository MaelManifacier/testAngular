import { Avertissement } from './Avertissement';

/* Pour le détail au mois (Sélection jour) :
Liste de : */
export class FraisJour {
    labelJour : string;
    date : string;
    montantTotalJour : number; // si undefined, "Aucun frais saisi"
    avertissement : Avertissement;
}