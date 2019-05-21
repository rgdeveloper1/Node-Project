import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    // tslint:disable-next-line:prefer-const
    let authServices = this.injector.get(AuthService);
    const tokenClone = req.clone({
      setHeaders: {
        Authorization: `Bearers ${authServices.getToken()}`
      }
    });
    return next.handle(tokenClone);
  }
}
