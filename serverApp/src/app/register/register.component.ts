import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }
  onRegister() {
    this.auth.register(this.registerForm.value).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
      },
      (err) => {
        console.log(err);
      }
    );

  }


}
