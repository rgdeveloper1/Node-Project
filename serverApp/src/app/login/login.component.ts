import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error = false;
  login_msg = false;

  storedToken = [];
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }
  onLogin() {
    this.auth.login(this.loginForm.value).subscribe(
      (res) => {
        this.storedToken.push(res);
        console.log(this.storedToken);
        this.error = false;
        this.login_msg = true;
        this.router.navigate(['/events']);
        this.loginForm.reset();
        localStorage.setItem('token' , this.storedToken[0].token);
      },
      (err) => {
        console.log(err);
        this.error = true;
        this.login_msg = false;
      }
    );
  }
}
