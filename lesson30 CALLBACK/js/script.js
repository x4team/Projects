function init () {     
 //Выборка эл-ов по имени тега img (вызов находит все теги изображения на странице и возвращает весь набор. Результат сохраняется в images)
 //***ПОДРОБНЕЕ*** 
 //Метод возвращает список объектов эелементов, соответствующих заданному имени тега.
 //Возвращается список объектов, НАПОМИНАЮЩИЙ массив. ФОрмально он не является массивом, но похож на массив по своим характеристикам.
 //Обратите внимание на букву "s" в имени ...Elements.. - метод возвращает не один объект, а НАБОР ОБЪЕКТОВ.
 //Имя тега заключается в кавычки (и не содержит символы < и >!)
 var images = document.getElementsByTagName("img");
 //Затем перебираем все изображения и поочередно назначаем обработчик события щелчка showAnswer каждому изображению. 
 //После завершения цикла свойству onclick каждого изображения назначен обработчик showAnswer
 for (var i = 0; i < images.length; i++) {
  images[i].onclick = showAnswer;
 }

//После щелчка создается eventObj - объект события, который передается обработчику showAnswer
 //Объект события содержит как общую, так и специализированную информацию о событии. Спец информация зависит от типа события.
 //Общая информация включает свойство target, в котором хранится ссылка на объект, сгенерировавший событие.
 function showAnswer(eventObj) {
  //Свойство target сообщает, какой элемент сгенерировал данное событие.
  //Другие свойства:
  //target - Я содержу объект, породивший событие. Объекты могут быть разными, но чаще всего это объект, представляющий элемент страницы.
  //type - Я строка, вида "click" или "load", которая описывает, что только что произошло
  //timeStamp - Интересует, когда произошло событие?
  //keyCode - какую клавишу нажал пользователь
  //clientX - На каком расстоянии от левой стороны окна браузера был сделан щелчок?
  //clientY - ...от верхней стороны окна браузера был сделан щелчок
  //touches - Сенсорный экран. Солькими пальцами пользователь прикасается к экрану?
  var image = eventObj.target;

  var name = image.id; //Мы можем использовать свойство id для получения имени неразмытого изображения.
  name = name + ".png";
  image.src = name; //полученное имя назначается свойству srс
  
  //1 Способ: Возвращаем размытую картинку через 2 секунды
  //var timerId = setInterval(function() {
  //clearInterval(timerId);
  //var name_timer = image.id;
  //name_timer = name_timer + "blur.png";
  //image.src = name_timer;
  //}, 2000);
  
  
  //2 Способ: Возвращаем размытую картинку через 2 секунды
  
  //В качестве обработчика указывается метод reblur (см.ниже), которому передается значение времени 2000мс и АРГУМЕНТ - изображение,
  //которое необходимо снова вывести в размытой версии.
  setTimeout(reblur, 2000, image); 
 }

 function reblur(image) {
  var name = image.id;
  name = name + "blur.png";
  image.src = name;
 }

}
window.onload = init; 

/* СУП С СОБЫТИЯМИ
click - событие генерируется при щелчке на элементе страницы (или прикосновении)
load - при завершении загрузки страницы
mousemove - при перемещении указателя мыши над элементом
keypress - при каждом нажатии клавиши
unload - при закрытии окна браузера или уходе с веб-страницы
mouseover - при наведении указателя мыши
mouseout - при выходе указателя мыши за пределы границы элемента
resize - при каждом изменении размера окна браузера
dragstart - при перетаскивании элемента на странице
drop - при отпускании элемента при перетаскивании
touchstart - при прикосновении к эелементам на устройствах с сенсорными экранами
touchend - при завершении прикосновения
play - страница содержит <video>? Мы будем получать это событие при нажатии кнопки воспроизведения.
pause - при нажатии кнопки приостановки
*/




