import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { Bluetooth } from "nativescript-bluetooth";
import { AppComponent } from "./app.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { BtPageComponent } from './bt-page/bt-page.component';
import { MainPageComponent } from './main-page/main-page.component';

import { appComponents, appRoutes } from "./app.routing";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { SideDrawerComponent } from './side-drawer/side-drawer.component';
import { AboutComponent } from './about/about.component';
import { AutoComponent } from './auto/auto.component';
import { SliderComponent } from './slider/slider.component';
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule, //for input
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes), //for routing
        NativeScriptUISideDrawerModule, //side drawer
    ],
    declarations: [
        AppComponent,
        BtPageComponent,
        MainPageComponent,
        ...appComponents,
        SideDrawerComponent,
        AboutComponent,
        AutoComponent,
        SliderComponent
    ],
    providers: [Bluetooth],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
