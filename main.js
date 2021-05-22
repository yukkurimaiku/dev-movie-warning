/**
 * 乱数を生成
 * @param {number} max 最大値
 * @param {number} min 最小値 未指定の場合は、0になる
 * @returns 
 */
const createRamdomNumber = (max, min = 0) => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
};

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

/**
 * メイン関数
 */
const main = () => {
    //表示するもの
    const displayWords = [
        '',
        '👨🚀👨👨🚀👨👨🚀👨👨🚀👨👨🚀👨👨🚀👨👨🚀👨👨🚀👨👨🚀👨👨🚀👨👨🚀👨👨🚀👨👨🚀👨👨🚀👨',
        '🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔',
        'GachiGASMGachiGASMGachiGASMGachiGASMGachiGASMGachiGASMGachiGASMGachiGASMGachiGASMGachiGASMGachiGASM',
        'How do you like that, huh!?How do you like that, huh!?How do you like that, huh!?How do you like that, huh!?',
        'hey guys we have a gift for youhey guys we have a gift for youhey guys we have a gift for youhey guys we have a gift for youhey guys we have a gift for youhey guys we have a gift for you',
        'syamu_gamesyamu_gamesyamu_gamesyamu_gamesyamu_gamesyamu_game',
        '11451419194545 11451419194545',
        '何が書いているか当てて下さい'

    ];
    displayRoopRandomWord(displayWords);
};

main();