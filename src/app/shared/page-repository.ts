import { Page } from "./page";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class PageRepository {
    pages:Page[]
    constructor(){
        this.pages = [
            {id:'about',title:'About',content:'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu dapibus erat. Aliquam erat volutpat. Donec ac turpis nibh. Cras at risus varius, imperdiet lectus id, varius orci. Nam sollicitudin vestibulum dui in imperdiet. Vivamus dignissim augue eu diam elementum, nec rutrum arcu tempus. Nunc pharetra malesuada scelerisque. Morbi suscipit sed augue ac viverra. Nullam porta sem et eleifend venenatis. Integer auctor dui lorem, ac commodo tortor dapibus id. Ut convallis eleifend nisi, ut placerat ante ullamcorper ac. Fusce sed orci tempor augue dignissim faucibus. Donec lorem nunc, vulputate eu convallis ut, ornare id ligula. Cras metus nulla, bibendum quis felis a, ornare luctus odio. Phasellus vel tincidunt enim, id pellentesque magna. Cras congue est vel est fringilla, dictum porta enim volutpat.</p>',date:1700312747164,featureImage:{id:'page',url:'https://picsum.photos/500/350',description:'Feature Image of Page'}},
            {id:'terms',title:'Terms of Use',content:'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu dapibus erat. Aliquam erat volutpat. Donec ac turpis nibh. Cras at risus varius, imperdiet lectus id, varius orci. Nam sollicitudin vestibulum dui in imperdiet. Vivamus dignissim augue eu diam elementum, nec rutrum arcu tempus. Nunc pharetra malesuada scelerisque. Morbi suscipit sed augue ac viverra. Nullam porta sem et eleifend venenatis. Integer auctor dui lorem, ac commodo tortor dapibus id. Ut convallis eleifend nisi, ut placerat ante ullamcorper ac. Fusce sed orci tempor augue dignissim faucibus. Donec lorem nunc, vulputate eu convallis ut, ornare id ligula. Cras metus nulla, bibendum quis felis a, ornare luctus odio. Phasellus vel tincidunt enim, id pellentesque magna. Cras congue est vel est fringilla, dictum porta enim volutpat.</p>',date:1700312747164},
            {id:'policy',title:'Privacy Policy',content:'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu dapibus erat. Aliquam erat volutpat. Donec ac turpis nibh. Cras at risus varius, imperdiet lectus id, varius orci. Nam sollicitudin vestibulum dui in imperdiet. Vivamus dignissim augue eu diam elementum, nec rutrum arcu tempus. Nunc pharetra malesuada scelerisque. Morbi suscipit sed augue ac viverra. Nullam porta sem et eleifend venenatis. Integer auctor dui lorem, ac commodo tortor dapibus id. Ut convallis eleifend nisi, ut placerat ante ullamcorper ac. Fusce sed orci tempor augue dignissim faucibus. Donec lorem nunc, vulputate eu convallis ut, ornare id ligula. Cras metus nulla, bibendum quis felis a, ornare luctus odio. Phasellus vel tincidunt enim, id pellentesque magna. Cras congue est vel est fringilla, dictum porta enim volutpat.</p>',date:1700312747164}
        ]
    }

    getPages():Page[]{
        return this.pages
    }

    getPageByid(id:string):Page{
        return this.pages.find(u=> u.id==id)!
    }
}
