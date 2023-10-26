import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login : string = 'toto';

  valid : boolean = true;

  isValid() : boolean {
    return this.valid;
  }

  desactivation() {
    this.valid = false;
  }

}
