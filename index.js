
class Htpl {

    constructor() {
        this.attributes = {}
    }

    
    add(attribute) {
        this.attributes[attribute] = attribute
    }

    hook() {
        for (const key in this.attributes.keys()) {
            let elements = document.querySelectorAll(`[${key}]`)
            for (let i = 0; i < elements.length; i++) {
                let element = elements[i]
                this.attributes[key](element)
            }
        }
    }


}
