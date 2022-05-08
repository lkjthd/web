import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  email = new FormControl('');
  pwd = new FormControl('');

  load: Boolean = false;

  loadingSubscription?: Subscription;
  loadingObservation?: Observable<boolean>;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  async login() {
    this.load = true;

    this.authService.login(this.email.value, this.pwd.value).then(cred => {
      this.router.navigateByUrl('/list');
      this.load = false;
    }).catch(error => {
      console.error(error);
    });
  }

  ngOnDestroy() {
    this.loadingSubscription?.unsubscribe();
  }
}