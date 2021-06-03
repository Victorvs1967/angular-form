import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  onLogin: boolean;

  constructor(private router: Router) {
    this.onLogin = false;
  }

  ngOnInit() {
  }

  clickLogout() {
    this.onLogin = false;
    this.router.navigateByUrl('login');
  }

  clickLogin() {
    this.onLogin = true;
  }

}
