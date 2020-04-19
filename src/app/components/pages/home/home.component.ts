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
            totalTests: 3,
            confirmedCases: 0,
            death: 0,
            deathPercentage: 0,
        },
        nippes: {
            totalTests: 19,
            confirmedCases: 2,
            death: 0,
            deathPercentage: 0,
        },
        sudEst: {
            totalTests: 25,
            confirmedCases: 4,
            death: 0,
            deathPercentage: 0,
        },
        ouest: {
            totalTests: 394,
            confirmedCases: 27,
            death: 1,
            deathPercentage: 4,
        },
        centre: {
            totalTests: 15,
            confirmedCases: 1,
            death: 0,
            deathPercentage: 0,
        },
        artibonite: {
            totalTests: 52,
            confirmedCases: 4,
            death: 0,
            deathPercentage: 0,
        },
        nordEst: {
            totalTests: 37,
            confirmedCases: 8,
            death: 2,
            deathPercentage: 25,
        },
        nord: {
            totalTests: 35,
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
    aggrTotalTests: Number = 595;
    aggrConfirmedCases: Number = 47;
    allTooltips: Array<String> = [];

    constructor() {}

    ngOnInit(): void {
        this.generateTooltips(this.regions);
    }

    generateTooltips(r: Regions) {
        for (let index = 0; index < 10; index++) {
            let tooltipContent = `<div>
            <p class="text-white text-muted mb-0">Tès Ki Fèt: ${
                Object.values(r)[index].totalTests
            }</p>
            <p class="text-white text-muted mb-0">Ka Konfime: ${
                Object.values(r)[index].confirmedCases
            }</p>
            <p class="text-white text-muted mb-0">Moun Mouri: ${
                Object.values(r)[index].death
            }</p>
            </div>`;

            this.allTooltips.push(tooltipContent);
        }
    }
}
