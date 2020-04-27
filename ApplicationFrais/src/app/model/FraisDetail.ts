import { Avertissement } from './Avertissement';
import { MoisRemboursement } from './MoisRemboursement';

/* Pour le détail au jour :
Liste de frais :*/
export class FraisDetail {
    typeFrais: string;
    montant: number;
    etat: string;
    facture: boolean;
    avertissementMontant : Avertissement;
    avertissementFacture : Avertissement;
    moisRemboursement : MoisRemboursement; // peut être undefined
}