import 'normalize.css/normalize.css'

const matrix4Var = [
    ['  ', '00', '01', '11', '10'],
    ['00', ' 0', ' 1', ' 3', ' 2'],
    ['01', ' 4', ' 5', ' 7', ' 6'],
    ['11', '12', '13', '15', '14'],
    ['10', ' 8', ' 9', '11', '10']
]

document.addEventListener('DOMContentLoaded', () => {
    const kmaps = document.querySelectorAll('.kmap')

    for (const kmap of Array.from(kmaps)) {
        for (let j = 0; j < matrix4Var.length; j++) {
            const row = matrix4Var[j]

            const rowDiv = createRow()
            kmap.appendChild(rowDiv)

            for (let i = 0; i < row.length; i++) {
                const col = row[i]
                const isHeader = j == 0 || i == 0
                const cell = createCell(col, isHeader)
                rowDiv.appendChild(cell)
            }
        }
    }
})

function createRow() {
    const div = document.createElement('div')
    div.className = 'row'
    return div
}

function createCell(textContent, isHeader) {
    const div = document.createElement('div')
    div.className = 'cell'
    if (!isHeader) {
        div.classList.add('jvalue')
    }
    const span = document.createElement('span')
    span.textContent = textContent
    div.appendChild(span)
    return div
}
