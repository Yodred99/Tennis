//interface para definir productos por mostrar
export interface Product{
    id: number;
    image: string;
    description: string;
    link: string;

    renderHTML(): void
}