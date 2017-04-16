import { UserService } from './../../core/service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'shop',
    templateUrl: 'shop.component.html',
    styleUrls: ['shop.component.scss']
})
export class ShopComponent implements OnInit {
    userName: string;
    constructor(userService: UserService) {
        this.userName = userService.userName;
    }

    ngOnInit() { }
}