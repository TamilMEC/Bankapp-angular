import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  withdraw(){
    const userObj = {
      amount:100,
      mobileNumber: "7871270126",
    };
    const url="http://localhost:9000/user/withdraw";
    this.http.post(url,userObj).subscribe((res)=>{
      console.log(res);
      this.toastr.success("Withdraw successfull");
    },(err)=>{
      console.log(err);
      this.toastr.error("Invalid Credentials");
    })
  }
}
