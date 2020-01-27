//получаем числа от 0 до size-1
let getRandomNamber = function(size){
    return Math.floor(Math.random() * size);
};
// Вычислить расстояние от клика (event) до клада (target)
let getDistance = function(event, target){
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY))
};

// Получить для расстояния строку подсказки 
let getDistanceHint =   function(distance){
    if(distance < 100){
        return "!!!!Ты почти нашел клад!!!!";
    }else if(distance < 200){
        return"!!Ты все ближе и ближе!!!";
    }else if(distance < 300){
        return"!!Продолжай в том же духе!!!";
    }else if(distance < 500){
        return"!!Ты стал на правильный путь!!";
    }else if(distance < 600){
        return"!!Надо искать в другом месте!!";
    }else if(distance < 650){
        return"!!Что то ты потерялся!!";
    }else{
        return"!!Ты плохой кладоискатель!!";
    }
};

// Создаем переменные 
let width = 1268;
let height = 480;
let clicks = 0;
let win = document.getElementById("win");
let loose = document.getElementById("losse");
let myLoose  = document.getElementById("myLoose");

// Случайная позиция клада
let target = {
    x: getRandomNamber(width),
    y: getRandomNamber(height)
};

// Добавляем элементу img обработчик клика
$("#map").click(function (event) {
    clicks++;
    // Получаем расстояние от места клика до клада
    let distance = getDistance(event, target);
    // Преобразуем расстояние в подсказку
    let distanceHint = getDistanceHint(distance);
    // Записываем в элемент #distance новую подсказку
    $("#distance").text(distanceHint)
    // Если клик был достаточно близко, поздравляем с победой
    if (distance < 50) {
        myLoose.onclick = function () {
            win.style.display = 'block';
            
        }

        closeTwo.onclick = function () {
            win.style.display = "none";
            
        }

        window.onclick = function () {
            if (event.target == loose) {
                win.style.display = "none";
            }
        }
    };
    if (clicks > 40) {
        myLoose.onclick = function () {
            loose.style.display = 'block';
            
        }

        closeTwo.onclick = function () {
            loose.style.display = "none";
            
        }

        window.onclick = function () {
            if (event.target == loose) {
                loose.style.display = "none";
            }
        }
    }
})

