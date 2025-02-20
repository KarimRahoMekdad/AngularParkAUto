import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appSettings } from '../../settings/app.settings';
import { Voiture } from '../../models/voiture';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private http:HttpClient) { }

  findAllVoiture() {
  return this.http.get(appSettings.APP_URL+"voitures");
  }
  saveVehicule(voiture:Voiture) {
    return this.http.post(appSettings.APP_URL+"voitures", voiture);
  }
}
