import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  Name!:string;
  MobileNumber!:string;
  Gender!:string;
  Age!:string;
  Password!:string;
  Amount!:string;


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  register(){
    const userObj={
        "accountNumber": 0,
        "name": "tamil",
        "age": 22,
        "mobileNumber": "2224412223",
        "gender": "male",
        "amount": 1000,
        "password": "tamil@11223344",
    };
    const url="http://localhost:9000/user/register";
    this.http.post(url,userObj).subscribe((res)=>{
      console.log(res);
      alert("successfully Registered");
    },(err)=>{
      console.log(err);
      alert("Please re-enter your Details");
    })
  }

}
