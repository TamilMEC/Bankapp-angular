import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  name!:string;
  mobilenumber!:string;
  gender!:string;
  age!:string;
  password!:string;
  amount!:string;


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  register(){
    const userObj={
        "name": this.name,
        "age": this.age,
        "mobileNumber": this.mobilenumber,
        "gender": this.gender,
        "amount": this.amount,
        "password": this.password,
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
