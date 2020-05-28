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
            confirmedCases: 27,
            death: 0,
            deathPercentage: 0,
        },
        grand_Anse: {
            totalTests: 9,
            confirmedCases: 17,
            death: 0,
            deathPercentage: 0,
        },
        nippes: {
            totalTests: 30,
            confirmedCases: 13,
            death: 1,
            deathPercentage: 0,
        },
        sud_Est: {
            totalTests: 36,
            confirmedCases: 33,
            death: 2,
            deathPercentage: 14.3,
        },
        ouest: {
            totalTests: 755,
            confirmedCases: 1023,
            death: 21,
            deathPercentage: 5.6,
        },
        centre: {
            totalTests: 50,
            confirmedCases: 33,
            death: 0,
            deathPercentage: 0,
        },
        artibonite: {
            totalTests: 72,
            confirmedCases: 85,
            death: 5,
            deathPercentage: 15.4,
        },
        nord_Est: {
            totalTests: 59,
            confirmedCases: 26,
            death: 2,
            deathPercentage: 16.7,
        },
        nord: {
            totalTests: 50,
            confirmedCases: 36,
            death: 2,
            deathPercentage: 12.5,
        },
        nord_Ouest: {
            totalTests: 14,
            confirmedCases: 27,
            death: 1,
            deathPercentage: 0,
        },
    };
    aggrTotalTests: Number = 3643;
    aggrConfirmedCases: Number = 1320;
    aggrTotalDeaths: Number = 34;
    aggrTotalRecoved: Number = 22;
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
