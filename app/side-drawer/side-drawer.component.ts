import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "ns-side-drawer",
    templateUrl: './side-drawer.component.html',
    styleUrls: ['./side-drawer.component.css']
})


export class SideDrawerComponent implements AfterViewInit, OnInit {
    private _mainContentText: string;
    pageCounter = 0;
    pageNames = ["Contoler", "Bluetooth", "Auto", "About"];

    constructor(
        private _changeDetectionRef: ChangeDetectorRef,
        private router: Router,
        private actRoute: ActivatedRoute
        ) {
            this.actRoute.params.subscribe((params) => {
                if(params["route"] != null) //for first time set up
                    this.pageCounter = params["route"];
                else
                    this.pageCounter = 0;
            });
    }

    @ViewChild(RadSideDrawerComponent, { static: false }) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {
        this.mainContentText = "SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    }

    get mainContentText() {
        return this._mainContentText;
    }

    set mainContentText(value: string) {
        this._mainContentText = value;
    }

    public openDrawer() {
        this.drawer.showDrawer();
    }

    public onCloseDrawerTap() {
        this.drawer.closeDrawer();
    }


    navigate(pageNum){ //navigates to page and parses its number to display page label
        switch(pageNum){
            case 0:
                this.router.navigate(["mainPage", 0]);
                break;
            case 1:
                this.router.navigate(["btPage", 1]);
                break;
            case 2:
                this.router.navigate(["autoPage", 2]);
                break;
            case 3:
                this.router.navigate(["aboutPage", 3]);
                break;
            default:
                break;
        }
    }
}
