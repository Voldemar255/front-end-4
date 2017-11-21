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

// 1.3 Функція суми елементів масива з додаванням  23-го елемента//
var codeObj = {};
codeObj['length'] = length;
codeObj['length'][23] = 95;
console.log('-----', sumData(codeObj['length']));


// 1.4 Функція сортування елементів масива методом бульбашки//
var data = [1, 2, 7, 10, 6, 9, 3, 8, 5, 4];
function bubleGum(data) {
    for (var a = 0; a < data.length - 1; a++){
        if (data[a] > data[a + 1]){
            var b = data[a];
            data[a] = data[a + 1];
            data[a + 1] = b;
        }
    }
    return data;
}