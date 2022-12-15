function redSquare() {
    let div = document.createElement('div')
    div.style.height = '11.1%'
    div.style.width = '11.1%'
    div.style.float = 'left'
    div.style.paddingBottom = '11.1%'
    div.style.backgroundColor = 'red'
    body.appendChild(div)
    
}

function blackSquare() {
    let div = document.createElement('div')
    div.style.height = '11.1%'
    div.style.width = '11.1%'
    div.style.float = 'left'
    div.style.paddingBottom = '11.1%'
    div.style.backgroundColor = 'black'
    body.appendChild(div)
    
}
var body = document.getElementsByTagName('body')[0]
body.style.display = 'flex'
body.style.flexWrap = 'wrap'
for (var i = 0; i < 50; i++) {
    redSquare()
    blackSquare()
}