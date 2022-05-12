import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.css']
})
export class UsermenuComponent implements OnInit {
  ImagePath: string;

  constructor() { 
    this.ImagePath = '/assets/images/Bankappicon.jpg'

  }

  ngOnInit(): void {
  }
 logout(){
   localStorage.clear();
   window.location.href="http://localhost:4200/welcomepage";
 }

}
