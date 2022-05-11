import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  amount: any;

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  deposit(){

    let number = localStorage.getItem('mobileNumber');

    const userObj = {
      "amount":this.amount,
      mobileNumber: number,
    };
    const url="http://localhost:9000/user/deposit";
    this.http.post(url,userObj).subscribe((res)=>{
      console.log(res);
      this.toastr.success("Deposit successfull");
    },(err)=>{
      console.log(err.error.message);
      this.toastr.error(err.error.message);
    })
  }


}
