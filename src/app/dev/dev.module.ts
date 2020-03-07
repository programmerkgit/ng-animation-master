import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DevRoutingModule} from './dev-routing.module';
import {CircleModule} from './circle/circle.module';
import { SilverHeadersComponent } from './silver-headers/silver-headers.component';


@NgModule({
    declarations: [SilverHeadersComponent],
    imports: [
        CommonModule,
        DevRoutingModule,
        CircleModule
    ],
    exports: [
        CircleModule,
        SilverHeadersComponent
    ]
})
export class DevModule {
}
