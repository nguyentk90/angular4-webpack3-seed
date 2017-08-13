import { AppConfig } from './../../app.config';
import { UserService } from './../../core/service/user.service';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
    userName: string;
    constructor(appConfig: AppConfig, userService: UserService) {
        this.userName = userService.userName;
    }
}