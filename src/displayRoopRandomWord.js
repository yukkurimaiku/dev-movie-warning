const createRamdomNumber = require('./createRamdomNumber');

/**
 * isplayWordsの中身を500ミリ秒ごとにランダムに表示
 * @param {Array[string]} displayRoopRandomWord 
 */
const displayRoopRandomWord = (displayWords) => {
    setInterval(() => {
        const randomNumber = createRamdomNumber(displayWords.length - 1);

        console.log(`\u001b[32mYKMIK@DEVMOVIE:~$ ${displayWords[randomNumber]}`);
    }, 500);
};

module.exports = displayRoopRandomWord;
