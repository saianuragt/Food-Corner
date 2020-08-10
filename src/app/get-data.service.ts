import { Injectable } from '@angular/core';
import { foodInterface } from './food-interface';
import { foodData } from './food-data';
import { CartComponent } from './cart/cart.component';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() { }

  food: foodInterface[];

  cart: foodInterface[] = [];

  add(data : foodInterface){
    this.cart.push(data as foodInterface);
  }

  getCart(){
    return this.cart;
  }

}
