import { Injectable } from "@angular/core";
import { Genre } from "./genre";

@Injectable({
    providedIn: 'root'
  })
  export class GenreRepository {

    genres:Genre[]

    constructor(){
        this.genres = [
            {id:'clothes', name:'Clothes'},
            {id:'shoes', name:'Shoes'},
            {id:'glassware', name:'Glassware'},
            {id:'electronic', name:'Electronic'},
            {id:'tools', name:'Tools'}
        ]
    }

    getCategories():Genre[]{
        return this.genres
    }

    getCategoryByid(id:string):Genre{
        return this.genres.find(u=> u.id==id)!
    }
}
