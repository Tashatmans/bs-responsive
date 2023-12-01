import { Component } from '@angular/core';
import { ProductRepository } from '../shared/product-repository';
import { Product } from '../shared/product';
import { GenreRepository } from '../shared/genre-repository';
import { Genre } from '../shared/genre';
import { Page } from '../shared/page';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../shared/payment.service';
import { CartItem } from '../shared/cart-item';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent {

  _products!: Product[]
  genres!: Genre[]
  cart!:CartItem[]

  slug!:string

  selectedCategory: Object = {}

  productPerPage: number = 8
  selectedPage: number = 1

  constructor(private productService:ProductRepository,private genreService:GenreRepository,private router:Router, private route:ActivatedRoute, private paymentService:PaymentService) {
    this._products=productService.getProducts()
    this.genres=genreService.getCategories()
  route.params.subscribe(params => {
    this.slug = params['genre']
    this._products=this.productService.getProductsByCategory(this.slug)
    const pageNumber = params['page']
    if(pageNumber == null || pageNumber == '1'){
      this.selectedPage = 1
    }else{
      this.selectedPage = pageNumber
    }
    this.cart=paymentService.getItems()
  })
  }

  changeGenre(genre?:Genre){
    if(  genre){
      this.router.navigateByUrl('/ecommerce/'+genre?.id+'/'+'1')
    }else{
      this.router.navigateByUrl('/ecommerce/all/1')
    }

    

  }
  changePage(page: number) {
    this.selectedPage = page
    this.router.navigateByUrl('/ecommerce/'+this.slug+'/'+page)
  }

  previousPage() {
    this.selectedPage--
    this.router.navigateByUrl('/ecommerce/'+this.slug+'/'+this.selectedPage)
  }
  nextPage() {
    this.selectedPage++
    this.router.navigateByUrl('/ecommerce/'+this.slug+'/'+this.selectedPage)
  }

  get pageNumbers(): number[] {
    if (this._products) {
      return Array(Math.ceil(
        this._products.length / this.productPerPage
      )).fill(0).map((a, i) => i + 1)
    }
    return [1]
  }

  get products():Product[]{
    let index = (this.selectedPage - 1) * this.productPerPage
    if (this._products) {
      return this._products.slice(index, index + this.productPerPage)
    }
    return this._products
  }


  public onAddToCart(product: Product) {
    this.paymentService.addItem(new CartItem(product, 1));
  }

}
