import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let ls = localStorage.getItem('ecomUser');
        if(ls){
            let currentUser = JSON.parse(ls);
            console.log(currentUser);
            if (currentUser && currentUser.token) {
                request = request.clone({
                    setHeaders: {
                        authorization: `${currentUser.token}`
                    }
                });                
            }
        }
        return next.handle(request);
            
        }
        
    }