import { AuthenticationService } from 'src/modules/common/services/authentication';
import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/modules/common/models';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  details: UserDetails;

  constructor(private auth: AuthenticationService) {}

  ngOnInit() {
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });
  }
}
