import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {
  toastrservice: any;

  constructor(private http:HttpClient,private toastr: ToastrService) { }

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
    let cfm = confirm("Do you want to Delete the user ?");
    if(cfm){
    const url = "http://localhost:9000/account/delete";
    this.http.post(url,numberObj).subscribe((res)=>{
      console.log(res);
      this.toastr.success("User deleted successfull");
      window.location.reload();
    },err=>{
      alert("Try again later");
    })
    
  }
}
}



  // deletecake(id:any){;
  //   let cfm = confirm("Do you want to Delete the user ?");
  //   if(cfm){
  //   const url="http://localhost:8080/account/delete" + id;
  //   this.http.delete(url).subscribe((res)=>{
  //     console.log(res);
  //     this.toastrservice.success("user deleted successfully");
     
  //   },(err)=>{
  //     this.toastrservice.error("Error occured");
  //   })
  // }

