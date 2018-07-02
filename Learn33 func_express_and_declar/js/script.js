//function expression:
//Мы присваиваем ссылку на функцию (БЕЗ ИМЕНИ!!!) - переменной! Обратите внимание на точку с запятой в конце!
var func = function(a, b) { return a + b; };
//Пример:
func(); //Не сработает, т.к. интерпретатор узнает о нет только тогда, когда дойдет до нее в коде
var func = function() { alert("Не сработает("); }; 
func(); //Здесь уже сработает

//Зачем нужны function exression?
//Теперь в зависимости от условия ниже, в переменную func будет записан исходный код и, следовательно,
//функции будут вести себя ПО-РАЗНОМУ!
var age = 17;

if (age>=18) {
	var func = function() {
		alert('Добро пожаловать!');
	};
} else {
	var func = function() {
		alert('Вам еще рано!');
	};
}



//function declaration:
//Мы сразу вызываем функцию, а после вызова идет объявление функции. (Интерпретатор сначала проходит 
// по коду и собирает в спец место все объявления переменных и функций)
sum(1,2);
function sum (a,b) {
	return a + b;
}

//Различия с примером (выше в func express)
//Тут уже так не пройдет. Интерпретатор смотрит код сверху вниз, следовательно
// он запишет значение последней функции и ее и будет вызывать. Тоесть условия в итоге не сработают.

var age = 17;

if (age>=18) {
	function func() {
		alert('Добро пожаловать!');
	};
} else {
	function func() {
		alert('Вам еще рано!');
	};
}
func();



