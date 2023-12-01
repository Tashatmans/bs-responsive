import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post';
import { PostRepository } from '../shared/post-repository';
import { Image } from '../shared/image';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  implements OnInit {

  post!: Post
  featureImage!:Image

  constructor(private postService: PostRepository, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug']
      this.post = this.postService.getPostByid(slug!)
      this.featureImage = this.post.featureImage!
  });

  }



}
