import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  mobilenumber!: string;
  password!: string;
  constructor(private http: HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  login() {
    const userObj = {
      "mobileNumber": this.mobilenumber,
      "password": this.password,
    };
    const url = "http://localhost:9000/user/login";
    this.http.post(url,userObj).subscribe((res) => {
      this.toastr.success("successfully logined");
      window.location.href="http://localhost:4200/usermenu";
    }, (err) => {
      this.toastr.error("Try after sometimes");
    })
  }

}
