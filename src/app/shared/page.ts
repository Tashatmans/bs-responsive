import { Image } from "./image";

export class Page {
    constructor(
        public id:string,
        public title:string,
        public content:string,
        public date:number = new Date().getTime(),
        public featureImage?:Image
    ){}
}
