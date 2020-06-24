import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BtService } from "../bt.service";

@Component({
    selector: "ns-bt-page",
    templateUrl: "./bt-page.component.html",
    styleUrls: ["./bt-page.component.css"],
    moduleId: module.id,
})
export class BtPageComponent implements OnInit {
    btColor = "red"; //shows if bt is connected to device
    btDeviceName = "Not connected";
    lastSentString = "None";

    checkBtColor; //sets interval

    public backParam: string;//for routing
    constructor(
        private route: ActivatedRoute,
        public bt: BtService
    ) {
        this.route.params.subscribe((params) => {
            //sets parameter for routing
            this.backParam = params["backParam"];
        });

        // this.btColor = this.bt.btColor; //sets bt color on each visit of page

    }

    ngOnInit(): void {
        this.scanNConnect();
    }

    scanNConnect(){
        this.bt.scanNConnect();
    }

    disconnectBT(){
        this.bt.disconnectBT();
    }

    sendBTData(dataToSend){
        this.bt.sendBTData(dataToSend);
    }
}
