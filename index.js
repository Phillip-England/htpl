class Htpl {

    constructor() {
        this.attributes = {}
    }

    
    add(attribute, fn) {
        this.attributes[attribute] = fn
    }

    hook() {
        for (let i = 0; i < Object.keys(this.attributes).length; i++) {
            let key = Object.keys(this.attributes)[i]
            let elements = document.querySelectorAll(`[${key}]`)
            for (let i2 = 0; i2 < elements.length; i2++) {
                let element = elements[i2]
                let attr = element.getAttribute(key)
                this.attributes[key](element, attr)
            }
        }
    }


}

const htpl = new Htpl()

htpl.add("proxy-click", (element, attr) => {
    let target = document.querySelector(attr)
    element.addEventListener('click', () => {
        target.click()
    })
})