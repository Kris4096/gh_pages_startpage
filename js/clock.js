var today, h, m, s, clockText;

function startTime() {
    today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);
    clockText = h + ":" + m + ":" + s;

    document.getElementById('clockDiv').innerHTML = clockText;
    document.title = "Home " + clockText;
    setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

startTime();