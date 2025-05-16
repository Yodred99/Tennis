import { Product } from "./Product";

export class StaticProduct implements Product{
    constructor(
        public id: number,
        public image: string,
        public description: string,
        public link: string
    ){}

    renderHTML(){
        return document.body.innerHTML = `
            <figure class="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
                <img src="${this.image}" alt="${this.description}" class="w-full max-w-md object-contain">
            </figure>
        `
    }
}