import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  MobileNumber!: string;
  Password!: string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  login() {
    const userObj = {
      "mobileNumber": "2224412223",
      "password": "tamil@11223344",
    };
    const url = "http://localhost:9000/user/login";
    this.http.post(url,userObj).subscribe((res) => {
      console.log(res);
      alert("successfully logined");
      window.location.href="http://localhost:4200/usermenu";
    }, (err) => {
      console.log(err);
      alert("Please re-enter your Details");
    })
  }

}
