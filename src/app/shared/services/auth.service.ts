import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: AngularFireAuth) { }

  login(email: string, pwd: string) {
    return this.auth.signInWithEmailAndPassword(email, pwd);
  }

  register(email: string, pwd: string) {
    return this.auth.createUserWithEmailAndPassword(email, pwd);
  }

  getAuthUser() {
    return this.auth.user;
  }
}
