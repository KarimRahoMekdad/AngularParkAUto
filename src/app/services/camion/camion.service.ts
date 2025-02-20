import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appSettings } from '../../settings/app.settings';
import { Camion } from '../../models/camion';

@Injectable({
  providedIn: 'root'
})
export class CamionService {

  constructor(private http:HttpClient) { }

  findAllCamion() {
  return this.http.get(appSettings.APP_URL+"camions");
  }
  saveVehicule(camion:Camion) {
    return this.http.post(appSettings.APP_URL+"camions", camion);
  }
}
