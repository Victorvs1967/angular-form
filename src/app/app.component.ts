import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PassDataService } from './service/pass-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public onLogin: boolean = false;

  constructor(private router: Router, private passDataService: PassDataService) {
    this.passDataService.passDataEvent.subscribe((data: boolean) => this.onLogin = data);
  }

  ngOnInit() {
  }

  clickLogout() {
    this.onLogin = false;
    this.router.navigateByUrl('login');
  }

  clickLogin() {
    this.router.navigateByUrl('');
  }

}
