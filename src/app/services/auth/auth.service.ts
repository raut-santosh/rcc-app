import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';
@Injectable()
export class AuthService {
 

  apiUrl: string = environment.apiUrl;
  private currentUserSubject: BehaviorSubject<any> | any;
  public currentUser: any;

  constructor(private http: HttpClient, public apiService: ApiService, public router: Router) {
  let ls = localStorage.getItem('directusCurrentUser');
  if (ls) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(ls));
    this.currentUser = this.currentUserSubject.asObservable();
  } else {
    this.currentUserSubject = new BehaviorSubject<any>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }
}


  public get currentUserValue(): any {
    return this.currentUserSubject?.value; 
  }


  login(params: any) {
    return this.http
      .post<any>(
        this.apiUrl + '/auth/login',
        params
      )
      .pipe(
        map((data) => {
          if (data) {
            console.log(data);
            this._syncUser(data);
          }
          return data;
        })
      );
  }

  register(params: any) {
    return this.http
      .post<any>(
        this.apiUrl + '/auth/register',
        params
      )
      .pipe(
        map((data) => {
          if (data && data.token) {
            this._syncUser({token: data.token});
            console.log(data);
          }
          return data;
        })
      );
  }

  refreshtoken(params = null) {
    // return this.http
    //   .post<any>(
    //     this.apiUrl + '/' + this.apiService.APIS.AUTH_REFRESHTOKEN.endpoint,
    //     params
    //   )
    //   .pipe(
    //     map((data) => {
    //       this._syncUser(data);
    //       return data;
    //     })
    //   );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('directusCurrentUser');
    if(this.currentUserSubject){
      this.currentUserSubject.next(null);
    }
    this.router.navigate(['/auth/login']);
  }

  _syncUser(data: any) {
    console.log(data);
    localStorage.setItem('directusCurrentUser', JSON.stringify(data));
    if(this.currentUserSubject) {
      this.currentUserSubject.next(data);
    }
    return true;
  }
}