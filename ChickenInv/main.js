
var chickenContainer = document.querySelector(".chickenContainer");

var rocket = document.querySelector(".rocket");

var container = document.querySelector(".container");


for (var i = 0; i < 75; i++) {

    var chickens = document.createElement('img');
    chickens.src = './Game-Images/Chicken.png';
    chickenContainer.append(chickens)

}

var position1 = 10, position2 = 0;
const containerHeight = window.innerHeight;
const containerWidth = window.innerWidth;


window.addEventListener('keydown', function (e) {
    if (e.code === 'ArrowUp') {
        position1 += 20;
        rocket.style.bottom = position1 + 'px';
        if (position1 >= containerHeight) {
            position1 = 10
        }
    } else if (e.code === 'ArrowDown') {
        position1 -= 20;
        rocket.style.bottom = position1 + 'px';
        if (position1 <= 0) {
            position1 = 10;
        }
    } else if (e.code === 'ArrowLeft') {
        position2 -= 20;
        rocket.style.left = position2 + 'px';
        if (position2 <= 0) {
            position2 = 0;
        }
    } else if (e.code === 'ArrowRight') {
        position2 += 20;
        rocket.style.left = position2 + 'px';
        if (position2 >= (containerWidth - 100)) {
            position2 = 0;
        }

    }

    if (e.code === 'Space') {
        var bullet = this.document.createElement('img');
        bullet.classList.add('bullet');
        bullet.src = './Game-Images/Bullet.png';
        rocket.append(bullet);

        var bulletPosition = 0;


        var bulletIn = setInterval(function () {
            bulletPosition += 20;
            bullet.style.bottom = bulletPosition + 'px';

            if (bulletPosition > 1000) {
                clearInterval(bulletIn);
                rocket.removeChild(bullet);
            }
        }, 10);
    }

});