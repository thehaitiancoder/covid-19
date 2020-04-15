export interface Regions {
    sud: regionDetails;
    grandAnse: regionDetails;
    nippes: regionDetails;
    sudEst: regionDetails;
    ouest: regionDetails;
    centre: regionDetails;
    artibonite: regionDetails;
    nordEst: regionDetails;
    nord: regionDetails;
    nordOuest: regionDetails;
}

interface regionDetails {
    totalTests: Number;
    confirmedCases: Number;
    death: Number;
    deathPercentage: Number;
}
