import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  splash = true;
  tabBarElement: any;
  content: any;
  onLoginForm = this.fb.group({
    'email': ['', Validators.compose([Validators.required, Validators.email])],
    'password': ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router) {
    // this.tabBarElement = document.querySelector('ion-tab-bar');
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
    this.router.navigate(['tabs/wall'])
  }

}
