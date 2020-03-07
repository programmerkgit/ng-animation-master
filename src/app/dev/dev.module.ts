import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DevRoutingModule} from './dev-routing.module';
import {CircleModule} from './circle/circle.module';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        DevRoutingModule,
        CircleModule
    ],
    exports: [
        CircleModule
    ]
})
export class DevModule {
}
