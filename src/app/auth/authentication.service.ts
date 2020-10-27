import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.get("../../assets/test_user.json", {});
  }

//   isAuIsAuthenticatedth(token : string): Observable<any>{
//     console.log("token: "+ token);
//     if(token.length){
//       localStorage.setItem('authorizationData',token);
//     }
//     let header = new HttpHeaders().set('Content-Type', 'application/json');
//     // header.append('Authorization', 'Bearer ' + token);

//     // console.log("isau authordata: ", localStorage.getItem('authorizationData'));
//     return this.http.post(environment.apiLogin + "isAuthenticated", {
//         headers: header,
//         observe: 'response',
//         responseType: 'json',
//       });
//   }

  // logout() {
  //     // remove user from local storage to log user out
  //     localStorage.removeItem('currentUser');
  // }
}
