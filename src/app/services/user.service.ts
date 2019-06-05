import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';
import { tap } from 'rxjs/internal/operators';

export interface UserResponse {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const USER_URL = 'https://jsonplaceholder.typicode.com/todos/1';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private cachedUserResponse: UserResponse = null;

  constructor(private http: HttpClient) {
  }

  public fetchUser(): Promise<UserResponse> {
    const userResponse = this.getCachedResponse();

    if (userResponse) {
      return of(userResponse).toPromise();
    }

    return this.http
      .get(USER_URL)
      .pipe(tap((response: UserResponse) => {
        this.setCachedResponse(response);
      }))
      .toPromise().catch(error => {
        console.error('fetchUser error: ', error);
        return error;
      });
  }

  public clearCachedResponse(): void {
    this.cachedUserResponse = null;
  }

  private setCachedResponse(response: UserResponse): void {
    this.cachedUserResponse = response;
  }

  private getCachedResponse(): UserResponse {
    return this.cachedUserResponse;
  }

}
