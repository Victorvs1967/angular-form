import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PassDataService } from 'src/app/service/pass-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public onLogin: boolean;
  public onRegister: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router, private passDataService: PassDataService) {
    this.onRegister = false;
    this.onLogin = true;
  }

  ngOnInit(): void {
    this.loginForm.reset();
  }

  loginForm: FormGroup = this.formBuilder.group({
    username: [null, {validators: [Validators.required], updateOn: "change"}],
    password: [null, {validators: [Validators.required, Validators.minLength(6)], updateOn: "change"}]
  });

  clickLogin() {
    console.log(this.loginForm.controls.username.value);
    console.log(this.loginForm.controls.password.value);
    this.loginForm.controls.username.setValue('');
    this.loginForm.controls.password.setValue('');

    this.passDataService.passDataEvent.emit(this.onLogin);
  }

  clickRegister() {
    this.router.navigateByUrl('register');
  }

}
