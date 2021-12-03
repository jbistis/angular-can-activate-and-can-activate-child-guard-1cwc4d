import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  subscription: Subscription;

  constructor(private readonly router: Router) {}

  ngOnInit() {
    this.subscription = this.router.events
      .pipe(
        filter(event => (event instanceof NavigationStart) || (event instanceof NavigationEnd))
      )
      .subscribe(event => console.log(event));
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

}
