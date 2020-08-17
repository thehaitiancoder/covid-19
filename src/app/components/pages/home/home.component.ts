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
            totalTests: 16,
            confirmedCases: 214,
            death: 6,
            deathPercentage: 0,
        },
        grand_Anse: {
            totalTests: 9,
            confirmedCases: 159,
            death: 12,
            deathPercentage: 0,
        },
        nippes: {
            totalTests: 30,
            confirmedCases: 136,
            death: 5,
            deathPercentage: 0,
        },
        sud_Est: {
            totalTests: 36,
            confirmedCases: 227,
            death: 8,
            deathPercentage: 14.3,
        },
        ouest: {
            totalTests: 755,
            confirmedCases: 5523,
            death: 81,
            deathPercentage: 5.6,
        },
        centre: {
            totalTests: 50,
            confirmedCases: 387,
            death: 6,
            deathPercentage: 0,
        },
        artibonite: {
            totalTests: 72,
            confirmedCases: 461,
            death: 38,
            deathPercentage: 15.4,
        },
        nord_Est: {
            totalTests: 59,
            confirmedCases: 195,
            death: 5,
            deathPercentage: 16.7,
        },
        nord: {
            totalTests: 50,
            confirmedCases: 391,
            death: 25,
            deathPercentage: 12.5,
        },
        nord_Ouest: {
            totalTests: 14,
            confirmedCases: 186,
            death: 10,
            deathPercentage: 0,
        },
    };
    aggrTotalTests: Number = 21344;
    aggrConfirmedCases: Number = 7879;
    aggrTotalDeaths: Number = 196;
    aggrTotalRecoved: Number = 5235;
    allTooltips: Array<String> = [];

    constructor() {}

    ngOnInit(): void {
        // Activating the tooltips
        this.generateTooltips(this.regions);
    }

    // This will generate the tooltips for the map
    generateTooltips(r: Regions) {
        for (let index = 0; index < 10; index++) {
            let region_name = Object.keys(r)[index];
            let final_region_name = region_name.replace("_", "-");
            let tooltipContent = `<div>
            <p class="text-capitalize text-white text-muted mb-0">${final_region_name}</p>
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
