/**
 * 乱数を生成
 * @param {number} max 最大値
 * @param {number} min 最小値 未指定の場合は、0になる
 * @returns 
 */
const createRamdomNumber = (max, min = 0) => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
};

module.exports = createRamdomNumber;
