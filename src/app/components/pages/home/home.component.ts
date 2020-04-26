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
            totalTests: 12,
            confirmedCases: 0,
            death: 0,
            deathPercentage: 0,
        },
        grandAnse: {
            totalTests: 5,
            confirmedCases: 0,
            death: 0,
            deathPercentage: 0,
        },
        nippes: {
            totalTests: 21,
            confirmedCases: 2,
            death: 0,
            deathPercentage: 0,
        },
        sudEst: {
            totalTests: 30,
            confirmedCases: 5,
            death: 1,
            deathPercentage: 20,
        },
        ouest: {
            totalTests: 510,
            confirmedCases: 49,
            death: 2,
            deathPercentage: 4,
        },
        centre: {
            totalTests: 39,
            confirmedCases: 1,
            death: 0,
            deathPercentage: 0,
        },
        artibonite: {
            totalTests: 55,
            confirmedCases: 5,
            death: 1,
            deathPercentage: 20,
        },
        nordEst: {
            totalTests: 51,
            confirmedCases: 11,
            death: 2,
            deathPercentage: 18,
        },
        nord: {
            totalTests: 39,
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
    aggrTotalTests: Number = 769;
    aggrConfirmedCases: Number = 74;
    aggrTotalDeaths: Number = 6;
    aggrTotalRecoved: Number = 7;
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
