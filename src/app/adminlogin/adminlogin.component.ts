import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  MobileNumber!: string;
  Password!: string;
  
  constructor(private http: HttpClient) { }
  

  ngOnInit(): void {
  }

  login() {
    const userObj = {
      "mobileNumber": "7871170126",
      "password": "admin123",
    };
    const url = "http://localhost:9000/admin/login";
    this.http.post(url,userObj).subscribe((res) => {
      console.log(res);
      alert("successfully logined");
      window.location.href="http://localhost:4200/adminmenu";
    }, (err) => {
      console.log(err);
      alert("Please re-enter your Details");
    }) 
  }

}
