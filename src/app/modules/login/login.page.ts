import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  existe = true;
  users = [];
  splash = true;
  tabBarElement: any;
  content: any;
  onLoginForm = this.fb.group({
    'email': ['', Validators.compose([Validators.required, Validators.email])],
    'password': ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router, public loginService: LoginService) {
    // this.tabBarElement = document.querySelector('ion-tab-bar');
    // const showSplash = sessionStorage.getItem('splash') ? sessionStorage.getItem('splash') : '';
    // if (showSplash === 'false') { this.splash = false; }
  }

  ionViewDidLoad() {
    // this.tabBarElement.style.display = 'none';
    if (this.splash !== false) {
      setTimeout(() => {
        this.splash = false;
        sessionStorage.setItem('splash', 'false');
        // this.tabBarElement.style.display = 'flex';
        // this.content = document.querySelector('ion-content');
        // this.content.scrollY = true;
      }, 2000);
    }
  }

  ngOnInit() {
    this.ionViewDidLoad();
  }

  async login() {
    const email = this.onLoginForm.controls.email.value;
    const pass = this.onLoginForm.controls.password.value;

    const found = this.loginService.login(email, pass);

    if (found) {
      this.router.navigate(['tabs/wall']);
      this.existe = true;
    } else {
      this.existe = false;
    }
  }

}
