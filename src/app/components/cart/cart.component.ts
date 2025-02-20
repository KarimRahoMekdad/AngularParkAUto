import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  public vehicule: any[] = []; // Initialisation comme tableau vide
  public grandTotal : number = 0;
  public vehiculeList : any;
  public id : number = 1;
  public stockQty : number =1;

  constructor(public cartService : CartService){
    
  }

  ngOnInit(): void {
    this.cartService.getVehicules().subscribe( 
      data => {
        console.log(data);
        this.vehicule = data;
        this.grandTotal = this.cartService.getTotal();
      });
  }

  emptyCart(){

  }

  removeCartItem(){

  }

  incProduct(){
    
  }

  decProduct(){

  }
}
