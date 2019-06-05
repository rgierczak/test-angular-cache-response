import { Component, OnInit } from '@angular/core';

import { UserResponse, UserService } from '../../services/user.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: [ './first-page.component.scss' ]
})
export class FirstPageComponent implements OnInit {
  public userResponse: UserResponse = null;

  constructor(private userService: UserService) {
  }

  public async ngOnInit(): Promise<void> {
    this.userResponse = await this.userService.fetchUserWithCache();
  }

  public clearCache(): void {
    this.userService.clearCachedResponse();
    console.log('Cache cleared!');
  }

}
