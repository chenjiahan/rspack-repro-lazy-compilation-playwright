import './render.css'

export function render() {
    const el = document.createElement('div')
    el.id = 'lazy-element'
    document.getElementsByTagName('body')[0].appendChild(el)
    el.innerHTML = 'hello, world'
}