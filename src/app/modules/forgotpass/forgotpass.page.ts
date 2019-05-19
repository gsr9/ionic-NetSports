import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {

  forgetForm = this.fb.group({
    'email': ['', Validators.compose([Validators.required, Validators.email])],
    'password': ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  checkMail() {
    if (this.forgetForm.get('email').touched &&
        this.forgetForm.get('email').invalid &&
        this.forgetForm.get('email').dirty) {
          return true;
    }
    return false;
  }
}
