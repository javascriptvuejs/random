var number = Math.ceil(Math.random() * 13);

var string = './images/' + number + '.jpg';

function random() {
    document.getElementById('img').src = string;
}

random();