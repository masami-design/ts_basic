/*
数字を1~100まで与えた時に、以下の条件に従って文字を出力する。
・3の倍数の時に "F" と出力
・5の倍数の時に "B" と出力
・3の倍数かつ5の倍数(つまり15の倍数)の時に "FB" と出力
それ以外の場合には与えられた数値を出力
*/
var maxNum = 100;
var minNum = 1;
function checkNumber() {
    var result;
    for (var counter = minNum; counter <= maxNum; counter++) {
        result = "";
        if (counter % 3 === 0) {
            result += "F";
        }
        if (counter % 5 === 0) {
            result += "B";
        }
        if (result === "") {
            console.log(counter + ",");
        }
        else {
            console.log(result + ",");
        }
    }
}
checkNumber();
