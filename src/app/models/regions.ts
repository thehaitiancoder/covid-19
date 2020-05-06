export interface Regions {
    sud: regionDetails;
    grand_Anse: regionDetails;
    nippes: regionDetails;
    sud_Est: regionDetails;
    ouest: regionDetails;
    centre: regionDetails;
    artibonite: regionDetails;
    nord_Est: regionDetails;
    nord: regionDetails;
    nord_Ouest: regionDetails;
}

interface regionDetails {
    totalTests: Number;
    confirmedCases: Number;
    death: Number;
    deathPercentage: Number;
}
