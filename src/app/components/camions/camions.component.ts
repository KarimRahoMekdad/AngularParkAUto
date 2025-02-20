import { Component, OnInit } from '@angular/core';
import { CamionService } from '../../services/camion/camion.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-camions',
  standalone: false,
  
  templateUrl: './camions.component.html',
  styleUrl: './camions.component.css'
})
export class CamionsComponent implements OnInit{
  camions : any;
  
  constructor(private camionService:CamionService, private cartService: CartService, private router:Router) {

  }

  ngOnInit(): void {
    this.getCamions()
  }

  getCamions() {
    this.camionService.findAllCamion().subscribe(
      data =>{
        //console.log(data);
        this.camions = data;
      }
    );
  }
  
  actionAddToCart(item: any){
    this.cartService.addToCart(item);
  }
}
