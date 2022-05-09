import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent implements OnInit {
  ds: any;

  constructor(private hcm: HttpClientModule) { }
  url = "http://localhost:9000/user/accountdetails/5124412223/tamil@11223344"
  userdetails!:any
  getlist(){
    fetch(this.url).then(res=>res.json()).then(res=>{
      this. userdetails= res
      localStorage.setItem("userdetails",JSON.stringify(this.userdetails))
    });
    return "success"
  }


  ngOnInit(): void {
    this.userdetails = localStorage.getItem("userdetails")
    this.userdetails = JSON.parse(this.userdetails)
    if(this.userdetails == undefined){
      this.ds.getlist()
    }
  }

}
