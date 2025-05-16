//clase para definir un boton - CTA
export class Button{
    constructor(
        public text: string,
        public style: string
    ){}

    renderHTML(){
        return document.body.innerHTML = `
            <button class="${this.style}">
                ${this.text}
            </button>
        `
    }
}