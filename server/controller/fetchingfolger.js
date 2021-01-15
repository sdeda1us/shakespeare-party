
const axios = require('axios');

const fetchingFolger = async(url) => {
    try{
        const {data} = await axios.get(url);
        return data;
    }catch (error) {
        console.log('bad things man', error);
    }
}

module.exports = fetchingFolger;