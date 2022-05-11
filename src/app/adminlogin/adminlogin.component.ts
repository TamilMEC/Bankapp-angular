import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  mobilenumber!: string;
  password!: string;
  
  constructor(private http: HttpClient,private toastr: ToastrService) { }
  

  ngOnInit(): void {
  }

  login() {
    const userObj = {
      "mobileNumber": this.mobilenumber,
      "password": this.password,
    };
    const url = "http://localhost:9000/admin/login";
    this.http.post(url,userObj).subscribe((res) => {
      console.log(res);
      this.toastr.success("successfully logined");
     
      window.location.href="http://localhost:4200/adminmenu";
    }, (err) => {
      console.log(err);
      this.toastr.error("Invalid crendentials");
    }) 
  }
}
