import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  existe = true;
  users = []
  splash = true;
  tabBarElement: any;
  content: any;
  onLoginForm = this.fb.group({
    'email': ['', Validators.compose([Validators.required, Validators.email])],
    'password': ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router,public fruitsService:UserService) {
    // this.tabBarElement = document.querySelector('ion-tab-bar');
    fruitsService.getFruits()
    .subscribe(fruits=>{
      this.users = fruits;
    });
  }

  ionViewDidLoad() {
    // this.tabBarElement.style.display = 'none';

    setTimeout(() => {
      this.splash = false;
      // this.tabBarElement.style.display = 'flex';
      // this.content = document.querySelector('ion-content');
      // this.content.scrollY = true;
    }, 4000);
  }

  ngOnInit() {
    this.ionViewDidLoad();
  }

  login() {
    this.users.forEach(element => {
      var email = this.onLoginForm.controls.email.value
      var pass = this.onLoginForm.controls.password.value
      if(email == element.email && pass == element.pass){
        this.router.navigate(['tabs/wall'])
      } else {
        this.existe = false
      }
    });
  }

}
