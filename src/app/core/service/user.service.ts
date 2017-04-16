import { UserServiceConfig } from './user-service.config';
import { Injectable, Optional } from '@angular/core';

@Injectable()
export class UserService {
  private _userName = 'Sherlock Holmes';

  constructor( @Optional() config: UserServiceConfig) {
    if (config) { this._userName = config.userName; }
    console.log(new Date().getTime());
  }

  get userName() {
    return this._userName;
  }
}