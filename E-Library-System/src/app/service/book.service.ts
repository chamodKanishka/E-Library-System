import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {User} from "../model/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {CommonService} from "./common.service";
import {catchError} from "rxjs/operators";
import { Book } from '../model/book';
import { Books } from '../model/Books';

const URL = "/api/v1";

@Injectable({
  providedIn: 'root'
})
export class BookService {
    books=new Array();
    passBook: Subject<Object> = new Subject<Object>();

  constructor(private http: HttpClient, private commonService: CommonService) {
  }

  addBook(book:Book): Observable<Book> {
    return this.http.post<Book>(environment.backend_url + URL + "/admin/addBook", book, {headers: this.commonService.createAuthorizationHeader()});
  }

  getBooks(category): Observable<Object> {
    return this.http.get<Object>(environment.backend_url + URL + "/admin/getBooks?category=" + category, {headers: this.commonService.createAuthorizationHeader()});
  }

  passBookFunction(book){
    //   this.passBook.next(book)
this.books.push(book)
  }
}
