import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {
  ImagePath: string;
  ImagePath2: string;
  ImagePath3: string;
  ImagePath4: string;
  

  constructor() { 
    this.ImagePath = '/assets/images/istockphoto-1150202699-612x612.jpg'
    this.ImagePath2 = '/assets/images/Leading-technology-trends-in-digital-banking.jpg'
    this.ImagePath3 = '/assets/images/istockphoto-938430346-612x612.jpg'
    this.ImagePath4 = '/assets/images/ten-reasons-internet-banking-opt.jpg'
  }

  ngOnInit(): void {
  }

}
