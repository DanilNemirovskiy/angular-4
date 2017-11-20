import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


import {AuthService} from "../auth.service";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSignin() {
    const email = this.signinForm.value.email;
    const password = this.signinForm.value.password;
    this.authService.signinUser(email, password);
  }
}
