import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
 dateMessage: string;
 someNumber: number= 11;
  
  constructor() { 
   
  
  }

  ngOnInit() {
  }

  displayDate(){
setInterval(() =>{
   let currentDate= new Date();
   this.dateMessage= currentDate.toDateString()+' '+ currentDate.toLocaleTimeString();}
   ,1000);

   return this.dateMessage;



  }

displaySum(a:number,b:number){
return a+b;

}


}