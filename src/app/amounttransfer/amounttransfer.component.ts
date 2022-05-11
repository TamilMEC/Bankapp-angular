import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-amounttransfer',
  templateUrl: './amounttransfer.component.html',
  styleUrls: ['./amounttransfer.component.css']
})
export class AmounttransferComponent implements OnInit {
  accountNumber: any;
  amount: any;

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  transfer(){
    let number = localStorage.getItem('mobileNumber');
    const userObj = {
      accountNumber:this.accountNumber,
      amount:this.amount,
      mobileNumber: number,
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
