import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  isWeakPassword = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSignup() {
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    if (password.length <= 4) {
      this.isWeakPassword = true;
    } else {
      this.isWeakPassword = false;
    }
    this.authService.signupUser(email, password);
  }
}
