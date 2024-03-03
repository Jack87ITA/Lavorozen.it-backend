const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const ContrattoEnum = ['indeterminato', 'determinato', 'apprendistato'];
const GenereEnum = ['uomo', 'donna', 'altro'];
const CategoriaEnum = ['dirigente', 'impiegato', 'operaio'];

const resultSchema = new mongoose.Schema({
    inps: {
        type: Number,
        default: 0
    },
}, { _id: false });


const inputSchmea = new mongoose.Schema({
    ral: {
        type: Number,
        default: 0
    },
    province: {
        type: String,
        default: ""
    },
    mensilita: {
        type: Number,
        required: true
    },
    contratto: {
        type: String,
        enum: ContrattoEnum,
        required: true
    },
    genere: {
        type: String,
        enum: GenereEnum,
        required: true
    },
    giorniLavorati: {
        type: Number,
        required: true
    },
    addizionaleComunale: {
        type: Number,
        default: 0.8
    },
    coniugeCarico: {
        type: Boolean,
        default: false
    },
    figliCarico: {
        type: Number,
        default: 0
    },
    percentualeFigliCarico: {
        type: Number,
        default: 0
    },
    altriFamiliariCarico: {
        type: Number,
        default: 0
    },
    categoria: {
        type: String,
        enum: CategoriaEnum,
        required: true
    },
    result: resultSchema,
});




const Input = mongoose.model('Input', inputSchmea);
module.exports = Input;
