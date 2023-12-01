import { Component, OnInit } from '@angular/core';
import { Page } from '../shared/page';
import { PageRepository } from '../shared/page-repository';
import { ActivatedRoute } from '@angular/router';
import { Image } from '../shared/image';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  page!: Page
  featureImage!:Image

  constructor(private pageService: PageRepository, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug']
      this.page = this.pageService.getPageByid(slug!)
      this.featureImage = this.page.featureImage!
  });

  }

}
