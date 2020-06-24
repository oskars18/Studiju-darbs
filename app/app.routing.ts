import { BtPageComponent } from './bt-page/bt-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AutoComponent } from './auto/auto.component';
import { AboutComponent } from './about/about.component';

export const appRoutes: any = [
    { path: "", component: MainPageComponent },
    { path: "mainPage/:route", component: MainPageComponent },
    { path: "btPage/:route", component: BtPageComponent },
    { path: "autoPage/:route", component: AutoComponent },
    { path: "aboutPage/:route", component: AboutComponent }
];

export const appComponents: any = [
    MainPageComponent,
    BtPageComponent
];
