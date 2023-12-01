import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post';
import { PostRepository } from '../shared/post-repository';
import { Category } from '../shared/category';
import { CategoryRepository } from '../shared/category-repository';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  posts:Post[]
  categories:Category[]
  slug!:string

  constructor(private postService:PostRepository, private categoryService:CategoryRepository, private route:ActivatedRoute){
    this.posts=postService.getPosts()
    this.categories = categoryService.getCategories()
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.slug = params['slug']
  });
  }
}
