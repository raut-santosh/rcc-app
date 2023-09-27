import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = environment.apiUrl;
  private currentUserSubject: BehaviorSubject<any> | any;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, public router: Router) {
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

  login(params: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/auth/login`, params)
      .pipe(
        map((data) => {
          if (data) {
            this._syncUser(data);
          }
          return data;
        })
      );
  }

  register(params: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/auth/register`, params)
      .pipe(
        map((data) => {
          if (data && data.token) {
            this._syncUser({ token: data.token });
            console.log(data);
          }
          return data;
        })
      );
  }

  refreshToken(): Observable<any> {
    // Send a request to your Directus API's refresh token endpoint
    return this.http
      .post<any>(`${this.apiUrl}/auth/refresh-token`, {})
      .pipe(
        map((data) => {
          if (data && data.token) {
            this._syncUser({ token: data.token });
          }
          return data;
        }),
        catchError((error) => {
          // Handle token refresh error (e.g., log out the user)
          this.logout(); // Example: Logout the user on refresh token failure
          return throwError(error);
        })
      );
  }

  logout(): void {
    // Remove user data from local storage
    localStorage.removeItem('directusCurrentUser');

    // Clear the current user subject
    this.currentUserSubject.next(null);

    // Redirect to the login page or perform other actions
    this.router.navigate(['/auth/login']);
  }

  private _syncUser(data: any): void {
    localStorage.setItem('directusCurrentUser', JSON.stringify(data));
    if (this.currentUserSubject) {
      this.currentUserSubject.next(data);
    }
  }
}
