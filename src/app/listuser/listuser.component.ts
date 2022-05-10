import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
 

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  user: any;
  getAllUsers() {
    const url = "http://localhost:9000/admin/listusers";
    this.http.get(url).subscribe((res)=>{
      this.user=res;
    },err=>{
      alert("no users found");
    })
  }

}
