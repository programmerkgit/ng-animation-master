import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CircleModule} from './dev/circle/circle.module';
import {DevModule} from './dev/dev.module';
import { SilverPlateComponent } from './silver-plate/silver-plate.component';

@NgModule({
    declarations: [
        AppComponent,
        SilverPlateComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DevModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
