import { Genre } from "./genre";

export class Product {
    constructor(
        public id:string,
        public name:string,
        public description:string,
        public genre:Genre[],
        public price:number,
        public stock:number,
        public url:string
    ){}
}
