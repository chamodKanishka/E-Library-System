import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { Book } from 'src/app/model/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {

  book:Book=new Book();
  errMessageReg=''
  constructor(private bookService:BookService, private router: Router) { }
  ngOnInit(): void {
  }

  addBook(){
    // console.log(this.book)
    this.bookService.addBook(this.book).subscribe((result)=>{
      console.log(result)
      if(result.message==='Book Added Sucessfull'){
      
        this.errMessageReg=result.message
      }
    },(err)=>{
      // console.log(err)
     this.errMessageReg=err.error.message
    })
  }

  selectBookType(val){
    this.book.category=val;
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/enter-page'])
  }

}
