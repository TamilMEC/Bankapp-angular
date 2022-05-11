import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  users: any;
  getAllUsers() {
    const userObj = {
      mobileNumber: "7871270126",
      password: "tamil123"
    };
    const url = "http://localhost:9000/user/accountdetails";
    this.http.post(url,userObj,{responseType:"json"}).subscribe((res)=>{
      this.users=res;
    },err=>{
      alert("no users found");
    })
  }
}

