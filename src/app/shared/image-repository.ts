import { Image } from "./image";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class ImageRepository {
    images:Image[]
    constructor(){
        this.images = [
        {id:'image1',url:'https://picsum.photos/500/365?random=1',description:'Image 1 of Galery'},
        {id:'image2',url:'https://picsum.photos/300/420?random=2',description:'Image 2 of Galery'},
        {id:'image3',url:'https://picsum.photos/365/365?random=3',description:'Image 3 of Galery'},
        {id:'image4',url:'https://picsum.photos/365/500?random=4',description:'Image 4 of Galery'},
        {id:'image5',url:'https://picsum.photos/250/365?random=5',description:'Image 5 of Galery'},
        {id:'image6',url:'https://picsum.photos/365/600?random=6',description:'Image 6 of Galery'},
        {id:'image7',url:'https://picsum.photos/600/600?random=7',description:'Image 7 of Galery'},
        {id:'image8',url:'https://picsum.photos/500/600?random=8',description:'Image 8 of Galery'},
        {id:'image9',url:'https://picsum.photos/450/365?random=9',description:'Image 9 of Galery'},
        {id:'image10',url:'https://picsum.photos/365/365?random=10',description:'Image 10 of Galery'},
        {id:'image11',url:'https://picsum.photos/365/365?random=11',description:'Image 11 of Galery'},
        {id:'image12',url:'https://picsum.photos/600/420?random=12',description:'Image 12 of Galery'},
    ]
    }

    getImages():Image[]{
        return this.images
    }

    getImageByid(id:string):Image{
        return this.images.find(u=> u.id==id)!
    }


}
