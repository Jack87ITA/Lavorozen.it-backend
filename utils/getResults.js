function getResults(input) {

    const inps = calculateInps(input.ral, input.mensilita, input.contratto);

    return {
        inps: inps.toFixed(0)
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

exports.getResults = getResults;