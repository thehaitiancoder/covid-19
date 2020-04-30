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
            totalTests: 32,
            confirmedCases: 5,
            death: 1,
            deathPercentage: 20,
        },
        ouest: {
            totalTests: 534,
            confirmedCases: 50,
            death: 3,
            deathPercentage: 4,
        },
        centre: {
            totalTests: 45,
            confirmedCases: 2,
            death: 0,
            deathPercentage: 0,
        },
        artibonite: {
            totalTests: 57,
            confirmedCases: 5,
            death: 1,
            deathPercentage: 20,
        },
        nordEst: {
            totalTests: 53,
            confirmedCases: 11,
            death: 2,
            deathPercentage: 18,
        },
        nord: {
            totalTests: 43,
            confirmedCases: 0,
            death: 0,
            deathPercentage: 0,
        },
        nordOuest: {
            totalTests: 8,
            confirmedCases: 1,
            death: 0,
            deathPercentage: 0,
        },
    };
    aggrTotalTests: Number = 810;
    aggrConfirmedCases: Number = 76;
    aggrTotalDeaths: Number = 7;
    aggrTotalRecoved: Number = 8;
    allTooltips: Array<String> = [];

    constructor() {}

    ngOnInit(): void {
        // Activating the tooltips
        this.generateTooltips(this.regions);
    }

    // This will generate the tooltips for the map
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
