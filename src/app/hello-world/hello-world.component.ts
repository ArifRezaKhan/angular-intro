import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  gitUserName:string= "";
  response:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
 search(){
   this.http.get('https://api.github.com/users/' + this.gitUserName)
   .subscribe((response)=>{
    this.response= response;
    console.log(this.response);
  })
  }



}