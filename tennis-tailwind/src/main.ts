import { Background } from "./components/ui/Background.ts";
import { Container } from "./components/ui/Container.ts";
import { Button } from "./components/ui/Button.ts";
import { Header } from "./components/ui/Header.ts";
import { StaticProduct } from "./components/ui/StaticProduct.ts";

//instanciar las clases
const background = new Background(['bg-gradient-to-b','from-zinc-900', 'via-stone-900', 'via-stone-900', 'to-stone-400']);
background.renderHTML();

const btn = new Button('ORDER NOW','bg-bright-sun-500 text-black font-bold font-montserrat py-3 px-6 rounded-full hover:bg-red-500 hover:text-white transition duration-800 cursor-pointer');

const header = new Header(
    'New Collection',
    'FASHION',
    'SALE',
    'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    btn
);
const product = new StaticProduct(1, '/tennis-item.png', 'Air Max Sneaker', '#');

const container = new Container(header, product);
container.renderHTML();