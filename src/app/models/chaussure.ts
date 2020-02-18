export class Chaussure {
    id: number;
    nom: string;
    marque: string;
    type: string;
    dateEntryStock: Date
    constructor(id=null, nom=null, marque=null, type=null, dateEntryStock=null) {
      this.id = id;
      this.nom = nom;
      this.marque = marque;
      this.type = type;
      this.dateEntryStock = dateEntryStock;
    }
}
