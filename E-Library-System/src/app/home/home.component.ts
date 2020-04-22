import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  showFiller = false;
  books;
  constructor(private _bottomSheet: MatBottomSheet,private bookService:BookService) {}

  openBottomSheet(book): void {
    
    this.bookService.passBookFunction(book)
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
    
  }

  ngOnInit(): void {
    this.getBooks(1);
  }

  getBooks(category){
    this.bookService.getBooks(category).subscribe((val)=>{
      this.books=val['results']['results'];
      console.log(this.books)
    })
  }

}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  books;
  viewBooks=false;
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>,private bookService:BookService) {
    bookService.passBook.subscribe((value) => {
      this.setBook(value);
    });
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  setBook(book){
this.books.push(book)
  }

  openMessage(){
    this.books=this.bookService.books;
    this.viewBooks=true;
  }
}
