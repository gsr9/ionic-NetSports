import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, IonNavPush } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  createSuccess = false;
  // registerCredentials = { name: '', email: '', password: '', confirmation_password: '' };
  public registerForm = this.fb.group({
    'email': ['', Validators.compose([Validators.required, Validators.email])],
    'user': ['', Validators.required],
    'pass': ['', Validators.required],
    'pass_conf': ['', Validators.required]
  }, { validator: this.checkPasswords });

  constructor(
    private nav: NavController,
    // private auth: AuthServiceProvider,
    private alertCtrl: AlertController,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() { }

  public register() {
    // Llamar al servicio que guarda el usuario si todo ha ido bien mostramos popup,
    // sino volvemos al form con mensaje de error/popup

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

  checkPasswords(group: FormGroup) {
    const pass = group.controls.pass.value;
    const confirmPass = group.controls.pass_conf.value;

    return pass === confirmPass ? null : { notSame: true };
  }

  navigateBack() {
    this.router.navigateByUrl('login');
  }
}