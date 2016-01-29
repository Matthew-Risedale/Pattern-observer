//создаём объект массивов функций для действий
var action = {};

//функция записи функций в массив функий для определенного действия
function subscribe(name, handler){
  //если нету массива для данного действия, создаём
  if(!action[name]){
    action[name] = [];
  }
  //добавляем событие в массив
  action[name].push(handler);
}

//функция выполнения всех функций из массива для данного действия
function trigger(name, data){
  if(!action[name]){
    return;
  }
  for(var i=0; i<action[name].length; i++){
    action[name][i](data);
  }
}

//вызываем первую функцию и передаем в нее функцию для события click
subscribe("click", function(data){
  console.log(data);
});
//вызываем вторую функцию и применяем все функции для события click с нашими входными данными hallo
trigger("click","hello");