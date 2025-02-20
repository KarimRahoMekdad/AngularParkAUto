export class Vehicule {
    matricule:number;
    anneeModel: number;
    prix: number;
    descriptif: string;
    imageVehicule: string;

    constructor(matricule:number, anneeModel: number, prix: number, descriptif: string, imageVehicule: string) {
        this.matricule = matricule;
        this.anneeModel = anneeModel;
        this.prix = prix;
        this.descriptif = descriptif;
        this.imageVehicule = imageVehicule;
    }
}
