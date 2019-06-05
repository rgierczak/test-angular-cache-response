import { Component, OnInit } from '@angular/core';

import { UserResponse, UserService } from '../../services/user.service';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: [ './third-page.component.scss' ]
})
export class ThirdPageComponent implements OnInit {
  public userResponse: UserResponse = null;

  constructor(private userService: UserService) {
  }

  public async ngOnInit(): Promise<void> {
    // this.userResponse = await this.userService.fetchUserWithCache();
    this.userResponse = await this.userService.fetchUser();
  }
}
