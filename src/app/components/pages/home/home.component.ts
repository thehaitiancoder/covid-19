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
            confirmedCases: 112,
            death: 4,
            deathPercentage: 0,
        },
        grand_Anse: {
            totalTests: 9,
            confirmedCases: 91,
            death: 5,
            deathPercentage: 0,
        },
        nippes: {
            totalTests: 30,
            confirmedCases: 69,
            death: 3,
            deathPercentage: 0,
        },
        sud_Est: {
            totalTests: 36,
            confirmedCases: 109,
            death: 2,
            deathPercentage: 14.3,
        },
        ouest: {
            totalTests: 755,
            confirmedCases: 3947,
            death: 45,
            deathPercentage: 5.6,
        },
        centre: {
            totalTests: 50,
            confirmedCases: 195,
            death: 0,
            deathPercentage: 0,
        },
        artibonite: {
            totalTests: 72,
            confirmedCases: 229,
            death: 13,
            deathPercentage: 15.4,
        },
        nord_Est: {
            totalTests: 59,
            confirmedCases: 70,
            death: 4,
            deathPercentage: 16.7,
        },
        nord: {
            totalTests: 50,
            confirmedCases: 152,
            death: 9,
            deathPercentage: 12.5,
        },
        nord_Ouest: {
            totalTests: 14,
            confirmedCases: 103,
            death: 3,
            deathPercentage: 0,
        },
    };
    aggrTotalTests: Number = 10378;
    aggrConfirmedCases: Number = 5077;
    aggrTotalDeaths: Number = 88;
    aggrTotalRecoved: Number = 24;
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
