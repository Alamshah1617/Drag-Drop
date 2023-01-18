const fill = document.querySelector('.fill')
const empties = document.querySelector('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragend)

for( const empty of empties){
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('drag', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart() {
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', o)
}

function dragEnd() {
    this.className = 'fill'
}

function dragOver(e) {
    e.preventDefault()
}

function drageEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave(){
    this.className = ' empty'
}

function dragDrop(){
    this.className = 'empty'
    this.append(fill)
}