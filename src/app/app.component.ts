import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AppFormTest';
  mocArr =[
    {contactMode:"Email", id:123},
    {contactMode:'Phone', id:124}
  ]
  userDetails={
    "userInfo": {
        "Username": "karan",
        "Email": "shitolejanardhan11@gmail.com"
    },
    "secretQuection": "favouratesport",
    "answer": "chess",
    "isSubscribed": true,
    "contactMode": "Email"
}
  @ViewChild ("signup") signup !:NgForm
 constructor(){

 }
  ngOnInit(): void {
    
  }
  onsignup(signup:NgForm){
    console.log(signup)
    console.log(signup.value)
  }
  onEdit(){
    this.signup.form.patchValue(this.userDetails)
  }
}
