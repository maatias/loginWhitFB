import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public firebaseAuth: AngularFireAuth) {}

  async login(email: string, password: string) {
    try {
      const result = await this.firebaseAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (error) {
      return console.log(error);
    }
  }
  async register(email: string, password: string) {
    try {
      const result = await this.firebaseAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (error) {
      return console.log(error);
    }
  }
  async logout() {
    try {
      await this.firebaseAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }
}
