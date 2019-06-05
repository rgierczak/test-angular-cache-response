import { Component, OnInit } from '@angular/core';

import { UserResponse, UserService } from '../../services/user.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: [ './second-page.component.scss' ]
})
export class SecondPageComponent implements OnInit {
  public userResponse: UserResponse = null;

  constructor(private userService: UserService) {
  }

  public async ngOnInit(): Promise<void> {
    this.userResponse = await this.userService.fetchUserWithCache();
  }
}
