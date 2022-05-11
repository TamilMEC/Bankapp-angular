import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactiondetails',
  templateUrl: './transactiondetails.component.html',
  styleUrls: ['./transactiondetails.component.css']
})
export class TransactiondetailsComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  users: any;
  getAllUsers() {
    const userObj = {
      mobileNumber: "7871270126"
    };
    const url = "http://localhost:9000/user/transaction";
    this.http.post(url,userObj,{responseType:"json"}).subscribe((res)=>{
      this.users=res;
      console.log(res);
      alert("success");
    },err=>{
      alert("no users found");
    })
  }

}
