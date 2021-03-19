const { numeralsToRoman } = require("../utils/ConvertNumeralsToRoman")


module.exports = class RomanController {
    async ToNumerals(req, res) {
        const { numerals } = req.body; 
        const result = numeralsToRoman(numerals);

        return res.status(200).json({ Roman: result});
    }
}