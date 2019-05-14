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

  constructor(private fb: FormBuilder, private router: Router, public userService: UserService) {
    // this.tabBarElement = document.querySelector('ion-tab-bar');
    const showSplash = sessionStorage.getItem('splash') ? sessionStorage.getItem('splash') : '';
    if (showSplash === 'false') { this.splash = false; }
    userService.getUsers()
      .subscribe(usersdb => { this.users = usersdb; });
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

  login() {
    let found = false;
    for (const user of this.users) {
      const email = this.onLoginForm.controls.email.value;
      const pass = this.onLoginForm.controls.password.value;
      if (email === user.email && pass === user.pass) {
        found = true;
        break;
      }
    }
    if (found) {
      this.router.navigate(['tabs/wall']);
      this.existe = true;
    } else {
      this.existe = false;
    }
  }

}
