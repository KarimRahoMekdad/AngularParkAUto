import { Component, OnInit, } from '@angular/core';
import { VoitureService } from '../../services/voiture/voiture.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-voitures',
  standalone: false,
  
  templateUrl: './voitures.component.html',
  styleUrl: './voitures.component.css'
})
export class VoituresComponent implements OnInit{
  voitures : any;
  constructor(private voitureService:VoitureService, private cartService: CartService, private router:Router) {

  }

  ngOnInit(): void {
    this.getVoitures()
  }

  getVoitures() {
    this.voitureService.findAllVoiture().subscribe(
      data =>{
        //console.log(data);
        this.voitures = data;
      }
    );
  }

  actionAddToCart(item: any){
    this.cartService.addToCart(item);
  }
}
