import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  submitStatus: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router ) {
    this.submitStatus = false;
  }

  ngOnInit() {
    this.setPhoneValidation();
  }

  registerForm: FormGroup = this.formBuilder.group({
    fullName: [null, { validators: [Validators.required], updateOn: "change" }],
    email: [null, { validators: [Validators.required, Validators.email], updateOn: "change" }],
    password: [null, { validators: [Validators.required, Validators.minLength(6)], updateOn: "change" }],
    phone: [null, { updateOn: "change" }],
    role: ['jobSeeker', { validators: [Validators.required], updateOn: "change" }],
    required: ['error'],
  });

  setPhoneValidation() {
    const phoneControl = this.registerForm.get("phone");
    phoneControl?.setValidators([Validators.pattern("^[0-9]*$"), Validators.required,]);
    this.registerForm.get("role")?.valueChanges.subscribe(role => {
      if (role == "jobSeeker") {
        phoneControl?.setValidators([Validators.pattern("^[0-9]*$"), Validators.required,]);
      } else if (role == "employee") phoneControl?.setValidators([Validators.pattern("^[0-9]*$")]);

      phoneControl?.updateValueAndValidity();
    });
  }

  submitForm() {
    console.log(this.registerForm.controls.fullName.value);
    console.log(this.registerForm.controls.email.value);
    console.log(this.registerForm.controls.password.value);
    console.log(this.registerForm.controls.phone.value);
    console.log(this.registerForm.controls.role.value);
    
    this.submitStatus = true;
    this.router.navigate(['']);
  }

}
