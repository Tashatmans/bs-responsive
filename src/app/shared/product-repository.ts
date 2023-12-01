import { Injectable } from "@angular/core";
import { Product } from "./product";

@Injectable({
    providedIn: 'root'
  })
export class ProductRepository {

    products:Product[]

    constructor(){
        this.products = [
            {id:'tshirt-man-model1', name:'T-Shirt for Man', description:'White front printed t-shirt', genre:[
            {id:'clothes', name:'Clothes'},
            ], price:20,stock:10,
        url:'assets/products-photo/tshirt-0.png'},
        {id:'tshirt-woman-model1', name:'T-Shirt for Woman', description:'White front printed t-shirt', genre:[
            {id:'clothes', name:'Clothes'},
        ], price:24,stock:10,
        url:'assets/products-photo/tshirt-1.png'},
        {id:'chino-pant-model2', name:'Chino Pant for Man Color Brown', description:'White front printed t-shirt', genre:[
            {id:'clothes', name:'Clothes'},
        ], price:80,stock:10,
        url:'assets/products-photo/pant-chino-0.png'},
        {id:'chino-pant-model1', name:'Chino Pant for Man Color Brown', description:'White front printed t-shirt', genre:[
            {id:'clothes', name:'Clothes'},
        ], price:70,stock:10,
        url:'assets/products-photo/pant-chino-1.png'},
        {id:'clasic-shoes-model1', name:'Clasic Italian Shoes for Man Color Brown', description:'Clasic Italian Shoes for Man Color Brown', genre:[
            {id:'shoes', name:'Shoes'},
        ], price:310,stock:10,
        url:'assets/products-photo/clasic-shoes-1.png'},
        {id:'clasic-shoes-model2', name:'Clasic Italian Shoes for Man Color Brown', description:'Clasic Italian Shoes for Man Color Brown', genre:[
            {id:'shoes', name:'Shoes'},
            ], price:210,stock:10,
            url:'assets/products-photo/clasic-shoes-0.png'},
        {id:'sport-shoes-model1', name:'Sport Shoes for Man', description:'Sport Shoes for Man Color Black', genre:[
            {id:'shoes', name:'Shoes'},
        ], price:240,stock:10,
        url:'assets/products-photo/sport-shoes-0.png'},
        {id:'sport-shoes-model2', name:'Sport Shoes for Man', description:'Sport Shoes for Man Color Rainbow', genre:[
            {id:'shoes', name:'Shoes'},
        ], price:350,stock:10,
        url:'assets/products-photo/sport-shoes-1.png'},
        {id:'candle-stick-0', name:'Brass Candle Stick ', description:'Brass Candle Stick', genre:[
            {id:'glassware', name:'Glassware'},
        ], price:30,stock:10,
        url:'assets/products-photo/candlestick-0.png'},
        {id:'candle-stick-1', name:'Brass Candle Trio Stick', description:'Brass Candle Trio Stick', genre:[
            {id:'glassware', name:'Glassware'},
        ], price:75,stock:10,
        url:'assets/products-photo/candlestick-1.png'},
        {id:'mobile-phone-model-0', name:'Mobile Phone Model 01', description:'Mobile Phone Model 01 256GB Memory Color Black 50MP Camera', genre:[
            {id:'electronic', name:'Electronic'},
            ], price:1100,stock:10,
            url:'assets/products-photo/mobile-phone-0.png'},
            {id:'mobile-phone-model-1', name:'Mobile Phone Model 10', description:'Mobile Phone Model 10 512GB Memory Color Black 50MP Camera', genre:[
            {id:'electronic', name:'Electronic'},
        ], price:1900,stock:10,
        url:'assets/products-photo/mobile-phone-1.png'},
        {id:'4k-lcd-tv-42', name:'42 Inch 4k LCD TV', description:'42 Inch 4k LCD TV', genre:[
            {id:'electronic', name:'Electronic'},
        ], price:1150,stock:10,
        url:'assets/products-photo/4k-lcd-tv-1.png'},
        {id:'4k-lcd-tv-50', name:'50 Inch 4k LCD TV', description:'50 Inch 4k LCD TV', genre:[
            {id:'electronic', name:'Electronic'},
        ], price:1600,stock:10,
        url:'assets/products-photo/4k-lcd-tv-0.png'},
        {id:'electric-screwd-0', name:'Electric Screwd Gun', description:'Electric Screwd Gun Shape', genre:[
            {id:'tools', name:'Tools'}
        ], price:450,stock:10,
        url:'assets/products-photo/electric-screwd-0.png'},
        {id:'electric-screwd-1', name:'Electric Screwd Pen', description:'Electric Screwd Pen Shape', genre:[
            {id:'tools', name:'Tools'}
        ], price:650,stock:10,
        url:'assets/products-photo/electric-screwd-1.png'},
        {id:'water-glass-l', name:'Water Glass Long', description:'Water Glass Long', genre:[
            {id:'glassware', name:'Glassware'},
        ], price:7,stock:10,
        url:'assets/products-photo/water-glass-0.png'},
        {id:'water-glass-s', name:'Water Glass Short', description:'Water Glass Short', genre:[
            {id:'glassware', name:'Glassware'},
        ], price:5,stock:10,
        url:'assets/products-photo/water-glass-1.png'},
        {id:'wine-glass-1', name:'Wine Glass Single', description:'Wine Glass Single', genre:[
            {id:'glassware', name:'Glassware'},
        ], price:10,stock:10,
        url:'assets/products-photo/wine-glass-0.png'},
        {id:'wine-glass-2', name:'Wine Glass Double', description:'Wine Glass Double', genre:[
            {id:'glassware', name:'Glassware'},
        ], price:20,stock:10,
        url:'assets/products-photo/wine-glass-1.png'},
        {id:'washing-machine-1', name:'Washing Machine 7KG', description:'Washing Machine 7KG 12 Program', genre:[
            {id:'electronic', name:'Electronic'},
        ], price:900,stock:10,
        url:'assets/products-photo/washing-machine-0.png'},
        {id:'washing-machine-1', name:'Washing Machine 9KG', description:'Washing Machine 9KG 16 Program', genre:[
            {id:'electronic', name:'Electronic'},
        ], price:1200,stock:10,
        url:'assets/products-photo/washing-machine-1.png'},
        {id:'laptop-0', name:'Laptop for Office', description:'Laptop for Office 14Inc Screen 2.4 Octa Core Cpu 256Gb Harddisk 8Gb Memory', genre:[
            {id:'electronic', name:'Electronic'},
        ], price:1000,stock:10,
        url:'assets/products-photo/laptop-0.png'},
        // {id:'tshirt', name:'T-Shirt', description:'White front printed t-shirt', genre:[
        //     {id:'clothes', name:'Clothes'},
        //     {id:'shoes', name:'Shoes'},
        //     {id:'glassware', name:'Glassware'},
        //     {id:'electronic', name:'Electronic'},
        //     {id:'tools', name:'Tools'}
        // ], price:100,stock:10,
        // url:'assets/products-photo/candlestick-1.png'},
        ]
    }

    getProducts():Product[]{
        return this.products
    }

    getProductByid(id:string):Product{
        return this.products.find(p=> p.id==id)!
    }

    getProductsByCategory(cat:string):Product[]{
        return cat=="all" ? this.products : this.products.filter(p=> p.genre.find(c=> c.id==cat))!
    }
    
}
