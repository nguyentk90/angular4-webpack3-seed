import { UserService } from './../../core/service/user.service';
import { HomeService } from './../service/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    template: '<h1>Welcome Home!</h1>'
})
export class HomeComponent implements OnInit {
    userName: string;
    constructor(userService: UserService, homeService: HomeService) {
        this.userName = homeService.userName;
    }

    ngOnInit() {
        $(() => {
            console.log("JQuery ready!");
        });
    }
}