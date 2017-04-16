import { AwesomePipe } from './awesome/awesome.pipe';
import { HighlightDirective } from './highlight/highlight.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule],
    exports: [
        CommonModule,
        FormsModule,
        HighlightDirective,
        AwesomePipe
    ],
    declarations: [HighlightDirective, AwesomePipe],
    providers: [],
})
export class SharedModule { }
