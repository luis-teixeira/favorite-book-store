import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-landing',
  templateUrl: 'page-landing.component.html',
  styleUrls: ['page-landing.component.css']
})
export class PageLandingComponent implements OnInit {
  title = 'welcome to yours favorite book Publisher';
  constructor() { }

  ngOnInit() {
  }

}
