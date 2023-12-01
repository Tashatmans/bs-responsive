import { CartItem } from "./cart-item";

export class Order {
    constructor(
        public oid:string,
        public items:CartItem[],
        public date:number = new Date().getTime(),
        public total: number = 0
    ){}
}
