import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminmenu',
  templateUrl: './adminmenu.component.html',
  styleUrls: ['./adminmenu.component.css']
})
export class AdminmenuComponent implements OnInit {
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
