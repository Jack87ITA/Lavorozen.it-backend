const Input = require("../models/Input");
const { getResults } = require("../utils/getResults");
require('dotenv').config();




exports.getResults = async (req, res) => {
    try {
        const {
            ral,
            province,
            mensilita,
            contratto,
            genere,
            giorniLavorati,
            addizionaleComunale,
            coniugeCarico,
            figliCarico,
            percentualeFigliCarico,
            altriFamiliariCarico,
            categoria
        } = req.body;

        const inputData = {
            ral,
            province,
            mensilita,
            contratto,
            genere,
            giorniLavorati,
            addizionaleComunale,
            coniugeCarico,
            figliCarico,
            percentualeFigliCarico,
            altriFamiliariCarico,
            categoria
        }


        const { inps, inpsAzienda, inail, tfr, costoAzendia, irpef, regionalTax, localTownRate, deductions, deductionsSum, iprefSum, stipendioNetto, trattamentoIntegrativo } = getResults(inputData);


        const formattedResultAndInput = {
            ral,
            province,
            mensilita,
            contratto,
            genere,
            giorniLavorati,
            addizionaleComunale,
            coniugeCarico,
            figliCarico,
            percentualeFigliCarico,
            altriFamiliariCarico,
            categoria,
            result: {
                ral: [ral, (ral / inputData.mensilita).toFixed(0)],
                inps: [inps, (inps / inputData.mensilita).toFixed(0)],
                inpsAzienda: [inpsAzienda, (inpsAzienda / inputData.mensilita).toFixed(0)],
                inail: [inail, (inail / inputData.mensilita).toFixed(0)],
                tfr: [tfr, (tfr / inputData.mensilita).toFixed(0)],
                costoAzendia: [costoAzendia, (costoAzendia / inputData.mensilita).toFixed(0)],
                irpef: [irpef, (irpef / inputData.mensilita).toFixed(0)],
                regionalTax: [regionalTax, (regionalTax / inputData.mensilita).toFixed(0)],
                localTownRate: [localTownRate, (localTownRate / inputData.mensilita).toFixed(0)],
                deductions,
                totalDeductions: [deductionsSum, (deductionsSum / inputData.mensilita).toFixed(0)],
                totalIrpef: [iprefSum, (iprefSum / inputData.mensilita).toFixed(0)],
                stipendioNetto: [stipendioNetto, (stipendioNetto / inputData.mensilita).toFixed(0)],
                trattamentoIntegrativo: [trattamentoIntegrativo, (trattamentoIntegrativo / inputData.mensilita).toFixed(0)],
            }
        }

        const newInput = new Input(
            formattedResultAndInput
        );

        await newInput.save();
        res.status(201).json({
            success: true,
            message: "data created successfully", data: formattedResultAndInput
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create data", error });
    }
};


