import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor() { 
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const Authorization ="ZnJvbnRlbmRAc2h5ZnRwbGFuLmNvbTphcGlfdGVzdF9hdXRoX3Rva2Vu";
    const authReq = req.clone({
      headers: req.headers.set('Authorization', Authorization !== null ? 'Basic ' + Authorization : '')
    });
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }
}
 