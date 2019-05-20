import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {

  forgotForm = this.fb.group({
    'email': ['', Validators.compose([Validators.required, Validators.email])],
    'pass': ['', Validators.required],
    'pass_conf': ['', Validators.required]
  }, { validator: this.checkPasswords });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  checkMail() {
    if (this.forgotForm.get('email').touched &&
      this.forgotForm.get('email').invalid &&
      this.forgotForm.get('email').dirty) {
      return true;
    }
    return false;
  }

  checkPasswords(group: FormGroup) {
    const pass = group.controls.pass.value;
    const confirmPass = group.controls.pass_conf.value;

    return pass === confirmPass ? null : { notSame: true };
  }

  recover() {
    const btn: any = document.querySelector('.send-button');
    btn.disabled = true;
    const email = this.forgotForm.controls.email.value;
    const pass = this.forgotForm.controls.pass.value;
    this.userService.getUserByEmail(email).subscribe(actions => {
      const key = actions[0].key;
      const user = actions[0].payload.val() as User;
      if (user.password !== pass) {
        user.password = pass;
        this.userService.updateUser(key, user).then(() => {
          this.showPopup();
          this.forgotForm.reset();
        });
      }
    });
  }

  async showPopup() {
    const alert = await this.alertCtrl.create({
      header: 'Contraseña restablecida',
      message: 'Aunque a veces no lo recordemos, nada de lo que sucede se olvida.\n\n¡Disfruta con tu nueva contraseña!',
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
