import { Component } from '@angular/core';
import { PostRepository } from '../shared/post-repository';
import { Post } from '../shared/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  posts:Post[]

  constructor(private postService:PostRepository){
    this.posts = postService.getPosts()!
  }

}
