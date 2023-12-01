import { Category } from "./category";
import { Image } from "./image";

export class Post {
    constructor(
        public id:string,
        public title:string,
        public content:string,
        public categories:Category[],
        public date:number = new Date().getTime(),
        public featureImage:Image
    ){}
}
