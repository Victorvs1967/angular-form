import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  onRegister: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.onRegister = false;
  }

  ngOnInit(): void {
  }

  loginForm: FormGroup = this.formBuilder.group({
    username: [null, {validators: [Validators.required], updateOn: "change"}],
    password: [null, {validators: [Validators.required, Validators.minLength(6)], updateOn: "change"}]
  });

  clickLogin() {
    console.log(this.loginForm.controls.username.value);
    console.log(this.loginForm.controls.password.value);

    this.onRegister = true;
  }


  clickRegister() {
    this.onRegister = true;
    this.router.navigateByUrl('register');
  }

}
