import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title='User';
  inputText: string= '';
  user: User;
  constructor(){
    this.user= new User();
     this.user.name='Arif Khan',
      this.user.designation='Software Engineer',
       this.user.address=' Maharaj Society near Shitole School, Near Old Sangvi Petrol Pump',
        this.user.phone=[
         '8167050565',
          '9853968431'
       ]


  }
}
