import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  splash = true;
  tabBarElement: any;
  content: any;
  constructor() {
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

}
