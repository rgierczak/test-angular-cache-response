import { Component, Input } from '@angular/core';

import { UserResponse } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [ './user.component.scss' ]
})
export class UserComponent {
  @Input() public userResponse: UserResponse = null;
}
