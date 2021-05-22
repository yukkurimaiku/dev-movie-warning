const createRamdomNumber = require('./createRamdomNumber');

const roopTime = 300;

/**
 * isplayWordsの中身を500ミリ秒ごとにランダムに表示
 * @param {Array[string]} displayRoopRandomWord 
 */
const displayRoopRandomWord = (displayWords) => {
    setInterval(() => {
        const randomNumber = createRamdomNumber(displayWords.length - 1);

        console.log(`\u001b[32mYKMIK@DEVMOVIE:~$ ${displayWords[randomNumber]}`);
    }, roopTime);
};

module.exports = displayRoopRandomWord;
