import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';

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

  public async fetchUserWithCache(): Promise<UserResponse> {
    const userResponse = this.getCachedResponse();

    if (userResponse) {
      return of(userResponse).toPromise();
    }

    const response = await this.fetchUser();
    this.setCachedResponse(response);
    return response;
  }

  public fetchUser(): Promise<UserResponse> {
    return this.http.get(USER_URL).toPromise() as Promise<UserResponse>;
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
