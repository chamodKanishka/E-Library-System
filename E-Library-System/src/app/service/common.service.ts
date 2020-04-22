import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Subject, throwError} from "rxjs";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

const URL = "/api";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  login: Subject<boolean> = new Subject<boolean>();

  constructor(private router: Router,private http: HttpClient) {
  }

  createAuthorizationHeader() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', localStorage.getItem('token'));
    return headers;
  }

  isLoggedIn() {
    return localStorage.getItem('token') != undefined;
  }


}
