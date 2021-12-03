import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user$: Observable<any>;
  paramsSubscription: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly userService: UserService
  ) {}

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      const id = params['id'];
      this.user$ = this.userService.getUser(id);
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}