import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  user: any;
  getAllUsers() {
    const url = "http://localhost:9000/admin/listusers";
    this.http.get(url).subscribe((res)=>{
      this.user=res;
      console.log(res);
      
    },err=>{
      alert("no users found");
    })
  }

  deleteuser(number:any){
    const numberObj={
      "mobileNumber" : number,
    };
    const url = "http://localhost:9000/account/delete";
    this.http.post(url,numberObj).subscribe((res)=>{
      console.log(res);
      alert("success");
    },err=>{
      alert("Try again later");
    })
    
  }

}
