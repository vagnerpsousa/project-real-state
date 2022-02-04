const {default: axios } = require("axios");

module.exports = async (cep) => {
    try {
        const URL = `https://viacep.com.br/ws/${cep}/json/`;
        const request = await axios.get(URL);
        return request.data;

    } catch (err) {
        return res.status(401).json({ message: 'invalid zip code' });
    }
};