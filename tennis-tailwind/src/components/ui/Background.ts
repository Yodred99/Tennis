//clase para definir el background y aplicarle un estilo
export class Background{
    constructor(
        public styles: string[]
    ){}

    renderHTML(){
        for (const style of this.styles) {
            document.body.classList.add(style);
        }
    }
}