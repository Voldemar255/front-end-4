
/*Функція знаходження середнього арифметичного*/
function Sered(a, b) {
    var s = ( a + b )/2;
    return s;
}


/*Функція знаходження меншого числа*/

function Minimal(a, b) {
    if (a < b) {
        return a;
    }
    if (a > b){
        return  b;
    }
    else {
        return "Введені числа тотожні!"
    }
}


/* Функція піднесення до n-го степеня*/

function pow(a, n) {
    var b = a;
    for (var i = 1; i < n; i++) {
        b *= a;
    }
    return b;
}
