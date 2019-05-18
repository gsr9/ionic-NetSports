import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, IonNavPush } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RegisterService } from './register.service';

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
    private fb: FormBuilder,
    private registerService: RegisterService
  ) { }

  ngOnInit() {
    if (this.registerForm.dirty) {
      this.registerForm.reset();
    }
  }

  public register() {
    // Llamar al servicio que guarda el usuario si todo ha ido bien mostramos popup,
    // sino volvemos al form con mensaje de error/popup
    const email = this.registerForm.controls.email.value;
    const password = this.registerForm.controls.pass.value;
    const username = this.registerForm.controls.user.value;
    this.registerService.addUser(email, username, password, 'amateur');
    this.showPopup();
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
