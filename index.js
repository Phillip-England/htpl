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
            let allElements = document.querySelectorAll('*')
            for (let i2 = 0; i2 < allElements.length; i2++) {
                let element = allElements[i2]
                let attributes = element.attributes
                for (const attrKey in attributes) {
                    let attr = attributes[attrKey].name
                    if (typeof(attr) == 'string') {
                        if (attr.startsWith(key)) {
                            this.attributes[key](element, element.getAttribute(attr))
                        }
                    }
                }
            }
        }
    }
}



const htpl = new Htpl()

htpl.add("ht-click-proxy", (element, attr) => {
    let target = document.querySelector(attr)
    element.addEventListener('click', () => {
        target.click()
    })
})

htpl.add('ht-mass-toggle', (element, attr) => {
    let parts = attr.split(":")
    let eventType = parts[0]
    let targets = parts[1].split(' ')
    let classes = parts[2].split(' ')
    element.addEventListener(eventType, () => {
        for (let i = 0; i < targets.length; i++) {
            let target = document.querySelector(targets[i])
            for (let i2 = 0; i2 < classes.length; i2++) {
                let cls = classes[i2]
                target.classList.toggle(cls)
            }
        }
    })
})
