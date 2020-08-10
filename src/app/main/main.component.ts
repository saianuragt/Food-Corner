import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { foodInterface } from '../food-interface';
import { foodData } from '../food-data';
import { GetDataService } from '../get-data.service';
import { MatSnackBar,MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  constructor(private getData: GetDataService,private _snackBar: MatSnackBar ) { }
  
  fooddata: foodInterface[];
  searchName;

  name:string;

  imgsrc='../../assets/';
  ngOnInit(): void {
    this.fooddata = foodData;
  }
  
  addtoCart(fooddata): void{
    this.getData.add(fooddata);
    this.name = fooddata.name;
    //console.log(fooddata);
  }

  // count(fooddata){
  //   fooddata.quantity=fooddata.quantity++;
  // }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  openSnackBar() {
    this._snackBar.open(this.name +' added to cart','', {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass:'snack'
    });
  }

  setname(type:string){
    this.searchName=type;
  }
}
