import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-header',
  templateUrl: 'ui-header.component.html',
  styleUrls: ['ui-header.component.css'],
  inputs: ['label','bgImgUrl'],
})
export class UIHeaderComponent implements OnInit {
  private bgImgUrl: string;
  private label = 'Welcome';
  constructor() { }
  ngOnInit() {}

}
