import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
auth_token;
    constructor(private router: Router) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
      // tslint:disable-next-line:prefer-const
      let token = localStorage.getItem('token') || '';
        // tslint:disable-next-line:prefer-const
        let cloned = req.clone({
             setHeaders: {
                 'Authorization': 'Bearer' + token ,
                 'DEVICE_ID': 'DEDSFSDdfdsfdssd',
                 'AUTH_TOKEN': 'dfsfljdslfkjsdlkjdslkfdjslf=fdfjslfjk'
                }
            }
        );
        return next.handle(cloned);
    }
}
