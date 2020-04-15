import { Component, OnInit } from "@angular/core";
import { Regions } from "../../../models/regions";

@Component({
    selector: "app-home-three",
    templateUrl: "./home-three.component.html",
    styleUrls: ["./home-three.component.scss"],
})
export class HomeThreeComponent implements OnInit {
    regions: Regions = {
        sud: { totalTests: 8, confirmedCases: 0, death: 0, deathPercentage: 0 },
        grandAnse: {
            totalTests: 2,
            confirmedCases: 0,
            death: 0,
            deathPercentage: 0,
        },
    };

    constructor() {}

    ngOnInit(): void {}
}
