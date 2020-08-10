import { Component, OnInit } from '@angular/core';
import { foodInterface } from '../food-interface';
import { foodData } from '../food-data';
import { GetDataService } from '../get-data.service';
import { MatSnackBar,MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private getData: GetDataService,private _snackBar: MatSnackBar, ) { }

  fooddata: foodInterface[];
  i:number=0;
  cart: foodInterface[] = [];
  searchName;

  name: string;
  msg:string;
  totalcart : number;


  imgsrc='../../assets/';

  ngOnInit(): void {
    this.fooddata = foodData;
    this.cart = this.getData.getCart();
    //console.log(this.cart);
    
  }
  
  addquantity(cart){
    cart.quantity++;
    cart.total=(cart.price * cart.quantity);
  }

  deletequantity(cart){
    cart.quantity--;
    cart.total=(cart.price * cart.quantity);
    if(cart.quantity==0){
      this.cart.splice(this.cart.indexOf(cart),1);
    }
  }

  deleteitem(cart){
    //this.name=cart.name;
    // const index: number = this.cart.indexOf(cart.name);
    // if (index !== -1) {
    //     this.cart.splice(index, 1);
    // }
   // this.cart.splice(this.cart.indexOf(cart.name), 1);
   
   this.cart.splice(this.cart.indexOf(cart),1);
  }
 
  fun(){
    this.totalcart = 0;
    for(let i=0;i<this.cart.length; i++){
    this.totalcart += this.cart[i].total;
    }
    return this.totalcart;
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  openSnackBar() {
    this._snackBar.open('Order Placed Successfully','', {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass:'snack'
    });
  }


}
