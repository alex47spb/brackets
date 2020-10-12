module.exports = function check(str, bracketsConfig) {

    if (str.length % 2 !== 0) return false;

    var stek = [];
    
    for (var iStr = 0; iStr < str.length; iStr++) {

        bracketsConfig.forEach(function (item, i, arr) {
            if (str[iStr] === item[0]) {
                // str[i] - открывающая

// console.log( item );
// console.log( 'str[i] = ' + str[i] );

                stek.push(i); // кладем на стек
            } else {
                if (str[iStr] === item[1]) {
                    // str[i] - закрывающая

                    if (stek.length === 0) return false;

                    if (stek[stek.length - 1] === i) {
                        // правильный номер строки шаблона

                        stek.pop(); // снимаем со стека
                    }
                } else return false;
            }
        });

        /*
      if( str[i] открывающая ) stek.push(номер строки шаблона);

      if( str[i] закрывающая ){
      if( stek.length === 0 )  return false;

      if( stek[stek.length-1] === номер строки шаблона str[i] ){

        stek.pop();
      }else{
        return false;
*/
    }

    return stek.length === 0;

};


