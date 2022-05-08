
import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  page = '';
  routes: Array<string> = [];
  user?: firebase.default.User | null;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.routes = this.router.config.map(conf => conf.path) as string[];

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((evts: any) => {
      const currentPage = (evts.urlAfterRedirects as string).split('/')[1] as string;
      if (this.routes.includes(currentPage)) {
        this.page = currentPage;
      }
    });
    var user = this.authService.getAuthUser();
    if (user === null)
      return
    user.subscribe(user => {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(this.user));
    }, error => {
      localStorage.setItem('user', 'null');
    });
  }

  changePage(selectedPage: string) {
    this.router.navigateByUrl(selectedPage);
  }
}