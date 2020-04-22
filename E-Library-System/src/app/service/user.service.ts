import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {User} from "../model/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {CommonService} from "./common.service";
import {catchError} from "rxjs/operators";

const URL = "/api/v1";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private commonService: CommonService) {
  }

  accAdminLogin(user: User): Observable<User> {
    return this.http.post<User>(environment.backend_url + URL + "/admin/adminLogin", user);
  }

  accStudentLogin(user: User): Observable<User> {
    return this.http.post<User>(environment.backend_url + URL + "/student/studentLogin", user);
  }

  accStudentRegister(user: User): Observable<User> {
    return this.http.post<User>(environment.backend_url + URL + "/student/studentRgister", user);
  }

//   accLogout(): Observable<void> {
//     return this.http.get<void>(environment.backend_url + URL + "/logout", {headers: this.commonService.createAuthorizationHeader()});
//   }
}
