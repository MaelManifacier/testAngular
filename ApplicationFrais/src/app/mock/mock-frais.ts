import { Frais } from '../model/Frais';


export const FRAIS: Frais[] = [
    {
        typeFrais: 'repas midi'
        , montant: 12
        , nbKm: 0
        , justificationDepassement: ''
        , remboursementAuSeuil: false
        , moyenPaiement: 0
        , facture: [
            ''
            , ''
        ]
    },
    {
        typeFrais: 'soirée étape'
        , montant: 55
        , nbKm: 0
        , justificationDepassement: ''
        , remboursementAuSeuil: true
        , moyenPaiement: 1
        , facture: [
            ''
            , ''
        ]
    }
]
