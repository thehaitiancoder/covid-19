import { Component, OnInit } from "@angular/core";
import { Regions } from "../../../models/regions";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
    regions: Regions = {
        sud: {
            totalTests: 8,
            confirmedCases: 0,
            death: 0,
            deathPercentage: 0,
        },
        grandAnse: {
            totalTests: 2,
            confirmedCases: 0,
            death: 0,
            deathPercentage: 0,
        },
        nippes: {
            totalTests: 16,
            confirmedCases: 2,
            death: 0,
            deathPercentage: 0,
        },
        sudEst: {
            totalTests: 21,
            confirmedCases: 4,
            death: 0,
            deathPercentage: 0,
        },
        ouest: {
            totalTests: 290,
            confirmedCases: 22,
            death: 1,
            deathPercentage: 5,
        },
        centre: {
            totalTests: 14,
            confirmedCases: 1,
            death: 0,
            deathPercentage: 0,
        },
        artibonite: {
            totalTests: 47,
            confirmedCases: 4,
            death: 0,
            deathPercentage: 0,
        },
        nordEst: {
            totalTests: 20,
            confirmedCases: 7,
            death: 2,
            deathPercentage: 29,
        },
        nord: {
            totalTests: 28,
            confirmedCases: 0,
            death: 0,
            deathPercentage: 0,
        },
        nordOuest: {
            totalTests: 7,
            confirmedCases: 1,
            death: 0,
            deathPercentage: 0,
        },
    };
    aggrTotalTests: Number = 453;
    aggrConfirmedCases: Number = 41;

    constructor() {}

    ngOnInit(): void {}
}
