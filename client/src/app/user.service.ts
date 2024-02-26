import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor( private http: HttpClient) { }

  login() {
    return this.http.post("/api/login",{}).pipe(
      tap((res : any) => {
        let token = res.token;
        const payload = JSON.parse(window.atob(token.split('.')[1]));
        this.user.next(payload.ime);
      })
    );
  }
}
