import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appSettings } from '../../settings/app.settings';
import { Vehicule } from '../../models/vehicule';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor(private http:HttpClient) { }

  findAllVehicule() {
  return this.http.get(appSettings.APP_URL+"vehicules");
  }
  saveVehicule(vehicule:Vehicule) {
    return this.http.post(appSettings.APP_URL+"vehicules", vehicule);
  }
}
