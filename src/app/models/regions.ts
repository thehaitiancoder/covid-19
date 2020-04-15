export interface Regions {
    sud: regionDetails;
    grandAnse?: regionDetails;
    Nippes?: regionDetails;
    SudEst?: regionDetails;
    Ouest?: regionDetails;
    Centre?: regionDetails;
    Artibonite?: regionDetails;
    NordEst?: regionDetails;
    Nord?: regionDetails;
    NordOuest?: regionDetails;
}

interface regionDetails {
    totalTests: Number;
    confirmedCases: Number;
    death: Number;
    deathPercentage: Number;
}
