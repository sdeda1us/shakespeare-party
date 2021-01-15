const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const cheerio = require('cheerio');
const folger = require('../controller/fetchingfolger');

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
console.log(req.params);   
scraper(`https://folgerdigitaltexts.org/${req.params.id}/charText/`)  
  .then(result => {res.send(result)})
  .catch(error => console.log('error retrieving play list', error))
});

const scraper = async(url) => {
    const html = await folger(url)
    let characters = [];
    let words = [];
    let wordCount = [];
    const selector = cheerio.load(html);
    selector('a').each(function(i, element) {
        let character = selector(this)
        .prepend()
        .text();
        characters.push(character);
    });
    selector('div').each(function(i, element) {
        let word = selector(this)
        .prepend()
        .text();
        words.push(word);
    });
    for(i=2; i < words.length; i=i+2){
        wordCount.push(words[i]);
    }
    return {characters: characters, wordCount: wordCount};
}
/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;