// 1.1 Функція перевірки масива на наявність елементів//

var length=[45, 109, 32, 39, 1, 0];
function isEmpty(length) {
    for
    (var element in length) {
        return true;
    }
    return false;
}


// 1.2 Функція суми елементів масива//

function sumData(length) {
    if (isEmpty(length)) {
        var summa=0;
        for
            (var element in length) {
            summa += length[element];
        }
        return summa;}

}

var codeObj = [length];
codeObj [23] = 95;
function sum(codeObj) {
    var summa=0;
    for (var element in length){
        summa += length[element];
    }
    return summa;
}