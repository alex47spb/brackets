module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) return false;

    var stek = [];

    for (var iStr = 0; iStr < str.length; iStr++) {
        bracketsConfig.forEach(function (item, i, arr) {
            if (str[iStr] === item[0] && str[iStr] === item[1]) {
                if (stek.length > 0) {
                    if (stek[stek.length - 1] === i) {
                        // правильный номер строки шаблона

                        stek.pop(); // снимаем со стека
                    } else {
                        stek.push(i); // кладем на стек
                    }
                } else {
                    stek.push(i); // кладем на стек
                }
            } else {
                if (str[iStr] === item[0]) {
                    // str[iStr] - открывающая

                    stek.push(i); // кладем на стек
                } else {
                    if (str[iStr] === item[1]) {
                        // str[iStr] - закрывающая

                        if (stek.length === 0) return false;

                        if (stek[stek.length - 1] === i) {
                            // правильный номер строки шаблона

                            stek.pop(); // снимаем со стека
                        }
                    } else return false;
                }
            }
        });
    }

    return stek.length === 0;
};
