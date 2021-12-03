import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  authState: boolean;
  authStateSubscription: Subscription;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.authStateSubscription = this.authService.isAuthenticated$.subscribe(authState => this.authState = authState);
  }

  toggleAuthState(nextState) {
    if (!nextState) {
      this.router.navigate(['/']);
    }
    this.authService.setAuthenticationStatus(!this.authState);
  }

  ngOnDestroy() {
    this.authStateSubscription.unsubscribe();
  }

}