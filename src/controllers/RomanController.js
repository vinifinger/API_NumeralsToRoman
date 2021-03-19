const { numeralsToRoman } = require("../utils/ConvertNumeralsToRoman")


module.exports = class RomanController {
    async ToRoman(req, res) {
        const { numerals } = req.body; 
        try {
            const result = numeralsToRoman(numerals);
            return res.status(200).json({ Roman: result});
        } catch (error) {
            return res.status(400).json({ Error: error});
        }
    }
}