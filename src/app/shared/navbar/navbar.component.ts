import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public isLogged: boolean = false;
  public userON: any;
  public user$: Observable<any> = this.authSvc.firebaseAuth.user;
  currentRoute: string = '';

  constructor(public authSvc: AuthService, private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        console.log(val);
        const url = val.urlAfterRedirects;
        console.log('url', url);
        this.currentRoute = url;
      }
    });
  }

  async onLogout() {
    try {
      await this.authSvc.logout();
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }
}
