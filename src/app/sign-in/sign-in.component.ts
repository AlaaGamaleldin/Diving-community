import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  ngOnInit(): void {
    
  }
  signinUser: any[] = [];
  Login: any ={
   userName:'',
   Password: '',
  };
  constructor() {}
  onSignIn() {
    this.signinUser.push(this.Login);
    localStorage.setItem('signinUser',JSON.stringify(this.signinUser));
  }
 }