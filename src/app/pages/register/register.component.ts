import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit(): void {}

  registerForm = new FormGroup({
    email: new FormControl(''),
    pwd: new FormControl(''),
    pwdConfirm: new FormControl('')
  });

  submit() {
    this.authService.register(this.registerForm.get('email')?.value, this.registerForm.get('pwd')?.value)
    .then(_ => this.router.navigateByUrl('/list'))
    .catch((error: any) => {
      console.error(error);
    });
  }
}
