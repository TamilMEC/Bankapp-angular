import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-amounttransfer',
  templateUrl: './amounttransfer.component.html',
  styleUrls: ['./amounttransfer.component.css']
})
export class AmounttransferComponent implements OnInit {

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  transfer(){
    const userObj = {
      accountNumber:663264,
      amount:888,
      mobileNumber: "7871270126",
    };
    const url="http://localhost:9000/user/amounttransfer";
    this.http.post(url,userObj).subscribe((res)=>{
      console.log(res);
      this.toastr.success("Withdraw successfull");
    },(err)=>{
      console.log(err);
      this.toastr.error("Invalid Credentials");
    })
  }
}
