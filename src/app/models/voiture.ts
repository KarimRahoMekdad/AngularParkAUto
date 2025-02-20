import { Vehicule } from "./vehicule";

export class Voiture extends Vehicule {
    immatriculation: string;
    puissanceFiscale: string;
    categorie: string;
    nbPorte: number;
    poidsTotal: number;
    media: string;

    constructor(matricule: number, anneeModel: number, prix: number, descriptif: string, imageVehicule: string,
    immatriculation: string, puissanceFiscale: string, categorie: string, nbPorte: number, poidsTotal: number, media: string) {
        // Appel du constructeur de la classe parente Vehicule
        super(matricule, anneeModel, prix, descriptif, imageVehicule);

        // Initialisation des propriétés spécifiques à Voiture
        this.immatriculation = immatriculation;
        this.puissanceFiscale = puissanceFiscale;
        this.categorie = categorie;
        this.nbPorte = nbPorte;
        this.poidsTotal = poidsTotal;
        this.media = media;
    }
}