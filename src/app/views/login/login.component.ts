import { Component } from '@angular/core';
import { logging } from 'protractor';
import { AuthenticationService } from '../../auth/authentication.service';
import { Router } from '@angular/router'
import { HttpClient,HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})


export class LoginComponent {

  email = "";
  password = "";

  constructor(private authentication : AuthenticationService ,private router : Router ,private httpClient : HttpClient){
    if(localStorage.getItem('401')){
      if(localStorage.getItem('401') === '1'){
        localStorage.setItem('401','0');
      }
    }
    //判斷是否使用IE或Edge
    const isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
    if(isIEOrEdge){
      alert("請使用Chrome瀏覽器，若使用IE或Edge瀏覽器會有部分功能將會不能使用");
    }
  }
  tryLogin(){
    if(this.email =='TestAdmin01' && this.password =='Aa12345678'){
      this.authentication.login(
        this.email,
        this.password
      ).subscribe(
        result => {
          if(result.body){
            if(result.body.Succ){
              this._login();
            }
            else{
              alert('帳號密碼錯誤或SSO內不存在此帳號');
            }
          }
          else{
            alert('帳號密碼錯誤或SSO內不存在此帳號');
          }
        },
        err =>{
          console.log('Error occured:');
          console.log(err);
          alert('Error occured, Try later!');
        }
      )
    }
    else{
      alert('帳號密碼錯誤或SSO內不存在此帳號');
    }
  }

  _login() {
    this.router.navigateByUrl('/dashboard');
  }

 }
