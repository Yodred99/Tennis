//clase para definir el header y todos sus elementos
import { Button } from "./Button"

export class Header{
    constructor(
        public collection: string,
        public title: string,
        public subtitle: string,
        public description: string,
        public button?: Button
    ){}

    renderHTML(){
        return document.body.innerHTML = `
            <div class="w-full md:w-1/2 text-center space-y-6">
                <header class="-rotate-10 table mx-auto">
                    <h2 class="text-5xl font-spartwell text-left -mb-4 ml-1.5 relative z-10">${this.collection}</h2>
                    <div class="text-5xl md:text-6xl">
                        <p class="text-bright-sun-500 font-anton text-8xl">${this.title}</p>
                        <p class="text-white font-anton text-9xl text-right">${this.subtitle}</p>
                    </div>
                </header>
  
                <p class="text-white md:text-lg md:px-22 leading-5 font-montserrat">${this.description}</p>
        
                ${this.button ? this.button.renderHTML() : ''}
            </div>
        `
    }
}