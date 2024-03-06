const { costSheet, irpefRate, regionalRate, ProvinceList, RegionProvinceMap } = require("../constant");

function getResults(input) {

    const inps = calculateInps(input.ral, input.mensilita, input.contratto);

    const { inpsAzienda, inail, tfr } = calculateCost(input.ral, input.contratto, input.categoria);

    const region = getRegion(input.province);

    const { irpefPaid, regionalTaxApplied, localTownRate } = calculateIrpef(input.ral - inps, region, input.addizionaleComunale);

    return {
        inps: inps.toFixed(0),
        inpsAzienda: inpsAzienda.toFixed(0),
        inail: inail.toFixed(0),
        tfr: tfr.toFixed(0),
        costoAzendia: Number(Number(input.ral) + Number(inpsAzienda) + Number(inail) + Number(tfr)).toFixed(0),
        irpef: irpefPaid.toFixed(0),
        regionalTax: regionalTaxApplied.toFixed(0),
        localTownRate: localTownRate.toFixed(0)
    }

}


const calculateInps = (ral, mensilita, contratto) => {



    const RAL_13 = mensilita === 13 ? ral / 13 : 0;

    const RAL_14 = mensilita === 14 ? ral / 14 : 0;

    const RAL_12 = ral - RAL_13 - RAL_14;

    let inpsRate = 0;

    const RAL_PER_MONTH = mensilita >= 12 ? RAL_12 / 12 : ral / mensilita

    if (contratto === "apprendistato") {
        inpsRate = 5.84;
    } else {
        let localInpsRate = 9.19;

        if (RAL_PER_MONTH < 1923) {
            inpsRate = localInpsRate - 7;
        } else if (RAL_PER_MONTH < 2692) {
            inpsRate = localInpsRate - 6;
        } else {
            inpsRate = localInpsRate;
        }

    }

    return (RAL_12 * inpsRate / 100) + (RAL_13 + RAL_14) * 0.0919;

}


const calculateCost = (ral, contratto, categoria) => {


    const inpsRateApplied = costSheet[contratto][categoria]["INPS"];
    const inalRateApplied = costSheet[contratto][categoria]["INAIL"];

    const inpsAzienda = ral * inpsRateApplied / 100;
    const inail = ral * inalRateApplied / 100;
    const tfr = ral / 13.5 - ral * 0.5 / 100;

    return {
        inpsAzienda,
        inail,
        tfr
    }

}


const calculateIrpef = (inponibileIRPEF, region, addizionaleComunale) => {

    console.log("inponibileIRPEF", inponibileIRPEF, "region", region, "addizionaleComunale", addizionaleComunale);

    let irpefPaid = 0;

    let regionalTaxApplied = 0;

    const localTownRate = inponibileIRPEF * addizionaleComunale / 100;


    if (inponibileIRPEF < 15000) {
        irpefPaid = inponibileIRPEF * irpefRate["15000"] / 100;
        regionalTaxApplied = regionalRate["15000"][region] * inponibileIRPEF / 100;
    } else if (inponibileIRPEF < 28000) {
        irpefPaid =
            15000 * irpefRate["15000"] / 100 +
            (inponibileIRPEF - 15000) * irpefRate["28000"] / 100;

        regionalTaxApplied = 15000 * regionalRate["15000"][region] / 100 + (inponibileIRPEF - 15000) * regionalRate["28000"][region] / 100;
    } else if (inponibileIRPEF < 50000) {
        irpefPaid =
            15000 * irpefRate["15000"] / 100 +
            13000 * irpefRate["28000"] / 100 +
            (inponibileIRPEF - 28000) * irpefRate["50000"] / 100;

        regionalTaxApplied = 15000 * regionalRate["15000"][region] / 100 + 13000 * regionalRate["28000"][region] / 100 + (inponibileIRPEF - 28000) * regionalRate["50000"][region] / 100;
    } else {
         15000 * irpefRate["15000"] / 100;

        irpefPaid =
            15000 * irpefRate["15000"] / 100 +
            13000 * irpefRate["28000"] / 100 +
            22000 * irpefRate["50000"] / 100 +
            (inponibileIRPEF - 50000) * irpefRate[">50000"] / 100;

        regionalTaxApplied = 15000 * regionalRate["15000"][region] / 100 + 13000 * regionalRate["28000"][region] / 100 + 22000 * regionalRate["50000"][region] / 100 + (inponibileIRPEF - 50000) * regionalRate[">50000"][region] / 100;
    }

    console.log("irpefPaid", irpefPaid, "regionalTaxApplied", regionalTaxApplied, "localTownRate", localTownRate);


    return {
        irpefPaid,
        regionalTaxApplied,
        localTownRate
    }

}


const getRegion = (province) => {

    let region = ""

    for (let key in RegionProvinceMap) {
        if (RegionProvinceMap[key].includes(province)) {
            region = key;
        }
    }


    return region;
}

exports.getResults = getResults;