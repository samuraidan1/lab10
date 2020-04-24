import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token')
    if(token) {
        console.log('there is a token')
        const authReq = req.clone({
            headers: req.headers.set('Autorization', 'JWT ' + token )
          })
        return next.handle(authReq)
    }
    console.log('there is no token')
    return next.handle(req)
  }
}