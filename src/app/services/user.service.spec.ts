import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  const USER_URL = 'https://jsonplaceholder.typicode.com/todos/1';
  const mockUserResponse = {
    id: 123,
    title: 'test',
    userId: 123,
    completed: true
  };

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

  it('should retrieve user data after calling fetchUser function', (done) => {
    const REQUEST_METHOD = 'GET';

    userService.fetchUser().then((user) => {
      expect(user).toEqual(mockUserResponse);
      done();
    });

    const req = httpTestingController.expectOne(USER_URL);
    expect(req.request.method).toEqual(REQUEST_METHOD);
    req.flush(mockUserResponse);
  });

  it('Should fetch user from backend when cache is cleared (VERSION 1) - check whether fetchUser function has been called', (done) => {
    userService.clearCachedResponse();

    spyOn(userService, 'fetchUser').and.returnValue(
      new Promise((resolve, reject) => {
        resolve(mockUserResponse);
      }));

    userService.fetchUserWithCache().then((user) => {
      expect(user).toEqual(mockUserResponse);
      expect(userService.fetchUser).toHaveBeenCalled();
      done();
    });
  });

  it('Should fetch user from backend when cache is cleared (VERSION 2) - check whether request to backend has been made', (done) => {
    userService.clearCachedResponse();

    userService.fetchUserWithCache().then((user) => {
      expect(user).toEqual(mockUserResponse);
      done();
    });

    const req = httpTestingController.expectOne(USER_URL);
    req.flush(mockUserResponse);
  });

  it('Should get user data from cache when cache is available', (done) => {
    userService.setCachedResponse(mockUserResponse);

    userService.fetchUserWithCache().then((user) => {
      expect(user).toEqual(mockUserResponse);
      done();
    });

    httpTestingController.expectNone(USER_URL);
  });

});
