import { Header } from "./Header.ts";
import { StaticProduct } from "./StaticProduct.ts";
export class Container{
    constructor(
        public header?: Header,
        public product?: StaticProduct
    ){}

    renderHTML(){
        document.body.innerHTML = `
            <section class="text-white min-h-screen flex items-center">
                <div class="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                    ${this.header ? this.header.renderHTML() : ''}
                    ${this.product ? this.product.renderHTML() : ''}
                </div>
            </section>
        `
    }
}