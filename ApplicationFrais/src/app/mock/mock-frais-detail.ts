import { FraisDetail } from '../model/FraisDetail';

export const FRAISDETAIL: FraisDetail[] = [
    {
        typeFrais: 'repas midi'
        , montant: 12
        , etat : 'Demande validation'
        , facture: false
        , avertissementMontant : {
            niveauImportance : 0
            , typeAvertissement : 0
            , texte : ""
        }
        , avertissementFacture : {
            niveauImportance : 0
            , typeAvertissement : 0
            , texte : ""
        }
        , moisRemboursement : {
            mois : "décembre"
            , justificationRefus : ""
        }
    },
    {
        typeFrais: 'soirée étape'
        , montant: 56
        , etat : 'Attente validation'
        , facture: true
        , avertissementMontant : {
            niveauImportance : 1
            , typeAvertissement : 0
            , texte : ""
        }
        , avertissementFacture : {
            niveauImportance : 0
            , typeAvertissement : 1
            , texte : "besoin de facture"
        }
        , moisRemboursement : {
            mois : ""
            , justificationRefus : "Une justification fort intéressante"
        }
    },
    {
        typeFrais: 'soirée étape'
        , montant: 56
        , etat : 'Attente validation'
        , facture: false
        , avertissementMontant : {
            niveauImportance : 2
            , typeAvertissement : 0
            , texte : ""
        }
        , avertissementFacture : {
            niveauImportance : 1
            , typeAvertissement : 1
            , texte : ""
        }
        , moisRemboursement : {
            mois : ""
            , justificationRefus : ""
        }
    },
    {
        typeFrais: 'péage'
        , montant: 56.55
        , etat : 'Validé'
        , facture: false
        , avertissementMontant : {
            niveauImportance : 0
            , typeAvertissement : 0
            , texte : ""
        }
        , avertissementFacture : {
            niveauImportance : 0
            , typeAvertissement : 1
            , texte : ""
        }
        , moisRemboursement : {
            mois : "Janvier"
            , justificationRefus : ""
        }
    }
]
