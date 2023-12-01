import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post';
import { PostRepository } from '../shared/post-repository';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  _posts!: Post[]
  slug!:string 

  postPerPage: number = 4
  selectedPage: number = 1

  constructor(private postService: PostRepository, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.slug = params['cat']
      this._posts = this.postService.getPostsByCategory(this.slug!)
      const pageNumber = params['page']
      if(pageNumber == null || pageNumber == '1'){
        this.selectedPage = 1
      }else{
        this.selectedPage = pageNumber
      }

    });
  }

  changePage(page: number) {
    this.selectedPage = page
    this.router.navigateByUrl('/blog/'+this.slug+'/'+page)
  }

  get pageNumbers(): number[] {
    if (this._posts) {
      return Array(Math.ceil(
        this._posts.length / this.postPerPage
      )).fill(0).map((a, i) => i + 1)
    }
    return [1]
  }

  get posts():Post[]{
    let index = (this.selectedPage - 1) * this.postPerPage
    if (this._posts) {
      return this._posts.slice(index, index + this.postPerPage)
    }
    return this._posts
  }

  }