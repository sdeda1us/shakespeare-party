
const axios = require('axios');

const fetchingFolger = async(url) => {
    try{
        console.log('in fetching folger', url);
        const {data} = await axios.get(url);
        console.log('hi james!', data);
        return data;
    }catch (error) {
        console.log('bad things man', error);
    }
}

module.exports = fetchingFolger;