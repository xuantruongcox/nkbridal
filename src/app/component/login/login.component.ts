import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  inputPWD;
  constructor(private router: Router) { }
  password = "1234567";
  ngOnInit() {
  }

  login() {
    if (this.inputPWD === this.password) {
      this.router.navigate(['/home'])
    }
    else{
      alert('invalid password')
    }
  }
}
