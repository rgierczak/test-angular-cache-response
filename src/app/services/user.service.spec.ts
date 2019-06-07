import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { UserResponse, UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService = null;
  let httpTestingController: HttpTestingController = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        UserService
      ]
    });

    userService = TestBed.get(UserService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should retrieve user data after calling fetchUser function', () => {
    const USER_URL = 'https://jsonplaceholder.typicode.com/todos/1';
    const REQUEST_METHOD = 'GET';

    const mockUserResponse: UserResponse = {
      id: 123,
      title: 'test',
      userId: 123,
      completed: true
    };

    userService.fetchUser().then((user) => {
      expect(user).toEqual(mockUserResponse);
    });

    const req = httpTestingController.expectOne(USER_URL);

    expect(req.request.method).toEqual(REQUEST_METHOD);

    req.flush(mockUserResponse);
  });

});
