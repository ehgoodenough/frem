let width = undefined
let height = undefined

module.exports = function(parameters) {
    width = parameters.width
    height = parameters.height
    resize()
}

function resize() {
    if(width !== undefined && height !== undefined) {
        const x = Math.floor(window.innerWidth / width)
        const y = Math.floor(window.innerHeight / height)
        window.document.documentElement.style.fontSize = Math.min(x, y) + "px"
    }
}

window.addEventListener("resize", resize)
