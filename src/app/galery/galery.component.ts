import { Component } from '@angular/core';
import { Image } from '../shared/image';
import { ImageRepository } from '../shared/image-repository';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent {

  galery!:Image[]
  imageTitle!:string
  imageUrl!:string

  constructor(private imageRepository:ImageRepository){
    this.galery = imageRepository.getImages()
  }

  setModal(image:Image){
    this.imageTitle = image.description
    this.imageUrl = image.url
  }

}
