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
        grand_Anse: {
            totalTests: 8,
            confirmedCases: 0,
            death: 0,
            deathPercentage: 0,
        },
        nippes: {
            totalTests: 28,
            confirmedCases: 2,
            death: 0,
            deathPercentage: 0,
        },
        sud_Est: {
            totalTests: 36,
            confirmedCases: 5,
            death: 1,
            deathPercentage: 20,
        },
        ouest: {
            totalTests: 724,
            confirmedCases: 69,
            death: 6,
            deathPercentage: 8.7,
        },
        centre: {
            totalTests: 49,
            confirmedCases: 2,
            death: 0,
            deathPercentage: 0,
        },
        artibonite: {
            totalTests: 64,
            confirmedCases: 8,
            death: 2,
            deathPercentage: 25,
        },
        nord_Est: {
            totalTests: 57,
            confirmedCases: 11,
            death: 2,
            deathPercentage: 18.2,
        },
        nord: {
            totalTests: 45,
            confirmedCases: 1,
            death: 1,
            deathPercentage: 100,
        },
        nord_Ouest: {
            totalTests: 14,
            confirmedCases: 3,
            death: 0,
            deathPercentage: 0,
        },
    };
    aggrTotalTests: Number = 1037;
    aggrConfirmedCases: Number = 101;
    aggrTotalDeaths: Number = 12;
    aggrTotalRecoved: Number = 10;
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
