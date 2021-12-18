var a = +prompt('Введите первое число');
var b = +prompt('Введите второе число');
var c = +prompt('Введите третье число');
if( a < b && b < c){
    alert('Ваше среднне число ' + b);
}
else if( b < a && a < c){
    alert('Ваше среднее число ' + a);
}
else if( a < c && c < b){
    alert('Ваше среднее число ' + c);
}
else if( c < b && b < a){
    alert('Ваше среднее число ' + b );
}
else if( c < a && a < b ){
    alert('Ваше среднее число ' + a );
}
else if( b < c && c < a ){
    alert('Ваше среднее число ' + c );
}
else{
    alert('Вы ввели неправильно')
}
