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
  data!: string;
  constructor(private http: HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  login() {
    const userObj = {
      "mobileNumber": this.mobilenumber,
      "password": this.password,
    };
    localStorage.setItem('mobileNumber', (this.mobilenumber));
    localStorage.setItem('password', (this.password));
    
    const url = "http://localhost:9000/user/login";
    this.http.post(url,userObj).subscribe((res) => {
      console.log(res);
      this.toastr.success("Login successfull");
      window.location.href="http://localhost:4200/usermenu";
    }, (err) => {
      console.log(err.error.message);
      this.toastr.error(err.error.message);
    })
  }

}


