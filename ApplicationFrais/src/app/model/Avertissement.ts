/*Modèle pour avertissement :*/
export class Avertissement {
    niveauImportance: number; // 0 = vert, 1 = orange, 2 = rouge
    typeAvertissement: number; // triangle ou losange
    texte:string;
}