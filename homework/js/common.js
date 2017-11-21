// 1.1 Функція перевірки масива на наявність елементів//
var length = [45, 109, 32, 39, 1, 0];
function isEmpty(array) {
    for (var element in array) {
        return true;
    }
    return false;
}
console.log('-----', isEmpty(length));

// 1.2 Функція суми елементів масива//
function sumData(array) {
    if (isEmpty(array)) {
        var summa = 0;
        for (var element in array) {
            summa += array[element];
        }
        return summa;}
}
console.log('-----', sumData(length));

// 1.3 Функція суми елементів масива//
var codeObj = {
    'length' : length
};
codeObj['length'][23] = 95;
console.log('-----', sumData(codeObj['length']));