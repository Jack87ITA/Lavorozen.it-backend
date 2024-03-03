function getResults(input) {

    const inps = calculateInps(input.ral, input.mensilita, input.contratto);

    return {
        inps: inps.toFixed(2)
    }

}


const calculateInps = (ral, mensilita, contratto) => {

    const RAL_PER_MONTH = ral / mensilita

    let inpsRate = 0;
    if (contratto === "apprendistato") {
        inpsRate = 5.84;
    } else {
        let localInpsRate = 9.19;

        if (RAL_PER_MONTH < 1923) {
            inpsRate = localInpsRate + 7;
        } else if (RAL_PER_MONTH < 2692) {
            inpsRate = localInpsRate + 6;
        } else {
            inpsRate = localInpsRate;
        }

    }

    return ral * inpsRate / 100;

}

exports.getResults = getResults;