export class Chaussure {
    id: number;
    nom: string;
    marque: string;
    type: string;
    taille: number;
    dateEntryStock: Date
    constructor(id=null, nom=null, marque=null, type=null, taille=null, dateEntryStock=null) {
      this.id = id;
      this.nom = nom;
      this.marque = marque;
      this.type = type;
      this.taille = taille;
      this.dateEntryStock = dateEntryStock;
    }
}
