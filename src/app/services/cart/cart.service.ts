import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Vehicule } from '../../models/vehicule';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any = [];
  public vehiculeList = new BehaviorSubject<any>([]);
  public grandTotal: number = 0;
  totalamount: number = 0;

  constructor() { }

  getVehicules() {
    return this.vehiculeList.asObservable();
  }

  setVehicules(vehicule: any) {
    this.cartItemList.push(...vehicule);  //Les trois point signifie que je mets a la suite.
    this.vehiculeList.next(vehicule)
  }

  //à faire addToCart
  addToCart(vehicule: any) {
    this.cartItemList.push(vehicule);
    this.vehiculeList.next(this.cartItemList);
    this.getTotal();
    //console.log(this.cartItemList);
    console.log(this.getTotal());
  }

  getQuantity(): number {
    let quantity = 1;
    return quantity
  }

  getTotal() {
    let total = 0;

    for (var i = 0; i < this.cartItemList.length; i++) {
      if (this.cartItemList[i].prix) {
        total += this.cartItemList[i].prix;
        this.totalamount = total;
      }
    }
    return this.totalamount;
  }

  removeAllCart() {
    this.cartItemList = [];
    this.vehiculeList.next(this.cartItemList);
  }

  increase(vehicule: Vehicule) {
    for (let i in this.cartItemList) {
      if (this.cartItemList[i].matricule === vehicule.matricule) {
        this.cartItemList[i].quantity++;
        break;
      }
    }
  }

  removeCartItem(vehicule: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (vehicule.matricule == a.matricule) {
        this.cartItemList.splice(index, 1)
      }
    });
    this.vehiculeList.next(this.cartItemList);
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal
  }
}