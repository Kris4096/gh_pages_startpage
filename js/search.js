
document.getElementById('searchBar').onkeydown = function(e) {
    if(e.keyCode == 13) { // Enter Key
        var elem = e.srcElement || e.target;
        var q = encodeURIComponent(elem.value);
        window.open('http://google.com/search?q='+q);
    }
}

document.getElementById('wolframBar').onkeydown = function(e) {
    if(e.keyCode == 13) { // Enter Key
        var elem = e.srcElement || e.target;
        var q = encodeURIComponent(elem.value);
        window.open('https://www.wolframalpha.com/input/?i='+q);
    }
}