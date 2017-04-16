import { Component } from '@angular/core';

import '../public/scss/styles.scss';

@Component({
	selector: 'app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent { appName = 'Setting up Angular 2 Webpack 2 Application'; }
