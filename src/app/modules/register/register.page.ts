import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, IonNavPush } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  createSuccess = false;
  registerCredentials = { name: '', email: '', password: '', confirmation_password: '' };

  constructor(
    private nav: NavController,
    // private auth: AuthServiceProvider,
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  ngOnInit() { }

  public register() {
    if (this.registerCredentials.password !== this.registerCredentials.confirmation_password) {
      // this.showPopup('Error', 'The password confirmation does not match.');
    } else {
      this.showPopup();
      // this.auth.register(this.registerCredentials).subscribe(success => {
      //   if (success) {
      //     this.createSuccess = true;
      //     this.showPopup("Success", "Account created.");
      //   } else {
      //     this.showPopup("Error", "Problem creating account.");
      //   }
      // },
      //   error => {
      //     this.showPopup("Error", error);
      //   }
      // );
    }
  }

  async showPopup() {
    const alert = await this.alertCtrl.create({
      header: 'Registrado',
      message: '¡Enhorabuena te has registtrado con éxito!',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigateByUrl('/login');
        }
      }]
    });

    await alert.present();
  }

}
