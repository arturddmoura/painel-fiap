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
    document.getElementById('count').style = 'color:#198754;';
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
    document.getElementById('count').style = 'color:#198754;';
    startTimerLuz();
}

function startEmergencia() {
    var counter = 10;
    var pause = false;
    setInterval(function () {
        counter--;
        if (counter >= 0) {
            span = document.getElementById('count');
            span.innerHTML = counter;
        }
        if (counter === 0) {
            alert('As autoridades foram acionadas!');
            clearInterval(counter);
        }
    }, 1000);
}

function emergencia() {
    document.getElementById('count').style = 'color:#8B1C00;';
    startEmergencia();
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

function change() {
    // no ';' here
    var elem = document.getElementById('myButton1');
    if (elem.value == 'Agendado') elem.value = 'Gravar';
    else elem.value = 'Agendado';
}

function change2() {
    // no ';' here
    var elem = document.getElementById('myButton2');
    if (elem.value == 'Agendado') elem.value = 'Gravar';
    else elem.value = 'Agendado';
}

function change3() {
    // no ';' here
    var elem = document.getElementById('myButton3');
    if (elem.value == 'Agendado') elem.value = 'Gravar';
    else elem.value = 'Agendado';
}
