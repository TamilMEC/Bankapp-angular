import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  deposit(){
    const userObj = {
      amount:888,
      mobileNumber: "7871270126",
    };
    const url="http://localhost:9000/user/deposit";
    this.http.post(url,userObj).subscribe((res)=>{
      console.log(res);
      this.toastr.success("Withdraw successfull");
    },(err)=>{
      console.log(err);
      this.toastr.error("Invalid Credentials");
    })
  }


}
