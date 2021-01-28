import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  constructor(private authSvc: AuthService, private router: Router) {}
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  ngOnInit(): void {}

  onLogin() {
    const { email, password } = this.loginForm.value;
    try {
      const user = this.authSvc.login(email, password);
      if (user) {
        this.router.navigate(['/home']);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
