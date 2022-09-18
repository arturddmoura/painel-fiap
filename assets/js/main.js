/*===== LINK ACTIVE  =====*/
const linkColor = document.querySelectorAll('.nav__link');

function colorLink() {
    if (linkColor) {
        linkColor.forEach((l) => l.classList.remove('active'));
        this.classList.add('active');
    }
}
linkColor.forEach((l) => l.addEventListener('click', colorLink));

/*===== PORTÃO  =====*/
function startTimer() {
    var counter = 5;
    setInterval(function () {
        counter--;
        if (counter >= 0) {
            span = document.getElementById('count');
            span.innerHTML = counter;
        }
        if (counter === 0) {
            alert('O portão foi aberto!');
            clearInterval(counter);
        }
    }, 1000);
}
function start() {
    document.getElementById('count').style = 'color:#99CC99;';
    startTimer();
}

/*===== luz  =====*/
function startTimerLuz() {
    var counter = 5;
    setInterval(function () {
        counter--;
        if (counter >= 0) {
            span = document.getElementById('count');
            span.innerHTML = counter;
        }
        if (counter === 0) {
            alert('A luz foi ligada!');
            clearInterval(counter);
        }
    }, 1000);
}

function startLuz() {
    document.getElementById('count').style = 'color:#99CC99;';
    startTimerLuz();
}

/*===== hora  =====*/
function display_c() {
    var refresh = 1000;
    mytime = setTimeout('display_ct()', refresh);
}

function display_ct() {
    var x = new Date();
    document.getElementById('ct').innerHTML = x.toLocaleString('pt-br');
    display_c();
}
