import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
 ngOnInit(): void {
  
 }
 
 signupUser: any[] = [];
 signupOpj: any = {
  userName:'',
  Email: '',
  Password: '',
 };
 constructor() {}
 onSignUp() {
    this.signupUser.push(this.signupOpj);
    localStorage.setItem('signupUser',JSON.stringify(this.signupUser));
 }
}



