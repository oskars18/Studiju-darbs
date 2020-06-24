import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { BtService } from "../bt.service";
import { sliders } from "../sliders";

@Component({
  selector: 'ns-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  moduleId: module.id,
})

export class MainPageComponent implements OnInit {
  constructor(private bt: BtService) {}
  slider = sliders;

  autoText = "Auto";
  autoState = false;

  ngOnInit(): void {

  }

  openDrawer(){
    const sideDrawer = new RadSideDrawer;
    sideDrawer.showDrawer();
  }

  startAuto(){
    this.bt.sendBTData("<7000>");

    this.autoState = !this.autoState;

    if(this.autoState)
        this.autoText = "Manual";
    else
        this.autoText = "Auto";
  }

  braucUzPrieksu(){
    this.bt.sendBTData("<8000>");
    }

  stop(){
    this.bt.sendBTData("<9000>");
    }

}
