
export class Frais {
    typeFrais : string;
    montant: number;
    nbKm: number;

    // on aura justification de dépassement ou remboursement au seuil
    justificationDepassement: string;
    remboursementAuSeuil: boolean;
    
    moyenPaiement : number; // CA ou carte perso
    facture: string[];
}


/*
-> Quand on rentre un type de frais, 
envoyer une requête pour savoir les possibles erreurs / avertissements
*/


