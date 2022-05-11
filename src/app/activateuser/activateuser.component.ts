import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activateuser',
  templateUrl: './activateuser.component.html',
  styleUrls: ['./activateuser.component.css']
})
export class ActivateuserComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  user: any;
  getAllUsers() {
    const url = "http://localhost:9000/admin/listinactiveusers";
    this.http.get(url).subscribe((res)=>{
      this.user=res;
      console.log(res);
      
    },err=>{
      alert("no users found");
    })
  }

  activateuser(number:any){
    const obj ={
      mobileNumber: "1211331122",
    };
    const url = "http://localhost:9000/admin/activateuser";
    this.http.post(url,obj).subscribe((res)=>{
      console.log(res);
    },err=>{
      alert("no users found");
    })
    
  }

  inactivateuser(){
    
    console.log("inactivate called");
  }

}
