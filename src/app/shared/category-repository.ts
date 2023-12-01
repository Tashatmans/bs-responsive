import { Injectable } from "@angular/core";
import { Category } from "./category";

@Injectable({
    providedIn: 'root'
  })
  export class CategoryRepository {

    categories:Category[]

    constructor(){
        this.categories = [
            {id:'lounge',name:'Lounge'},
            {id:'frontend',name:'Frontend'},
            {id:'framework',name:'FrameWork'},
            {id:'database',name:'DataBase'},
            {id:'backend',name:'Backend'}
        ]
    }

    getCategories():Category[]{
        return this.categories
    }

}
