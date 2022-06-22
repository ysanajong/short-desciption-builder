window.onresize = screen;
window.onload = scren;

function screen() {
    myWidth = window.innerWidth
    myHeight = window.innerHeight
}

function copyButton() {
    output.select().document.execCommand('copy')
}

function refresh() {
    window.location.reload()
}