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


        const { inps, inpsAzienda, inail, tfr, costoAzendia, irpef, regionalTax, localTownRate } = getResults(inputData);

        const newInput =
        // new Input(
        {
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
                inps,
                inpsAzienda,
                inail,
                tfr,
                costoAzendia,
                irpef,
                regionalTax,
                localTownRate
            }
        }
        // );


        // await newInput.save();
        res.status(201).json({
            success: true,
            message: "data created successfully", data: newInput
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create data", error });
    }
};


