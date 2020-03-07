import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CircleRoutingModule} from './circle-routing.module';
import {CircleComponent} from './circle.component';


@NgModule({
    declarations: [CircleComponent],
    exports: [
        CircleComponent
    ],
    imports: [
        CommonModule,
        CircleRoutingModule
    ]
})
export class CircleModule {
}
