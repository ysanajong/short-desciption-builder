window.onresize = screen;
window.onload = screen;

function screen() {
    myWidth = window.innerWidth
    myHeight = window.innerHeight

    document.getElementById('witdh').innerHTML
    = "PageWidth: " + myWidth +"px";
    document.getElementById('height').innerHTML
    = "PageHeight: " + myHeight +"px";
}

function copyButton() {
    output.select().document.execCommand('copy')
}

function refresh() {
    window.location.reload()
}