import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-header',
  templateUrl: 'ui-header.component.html',
  styleUrls: ['ui-header.component.css'],
  inputs: ['label','subLabel','bgImgUrl','overlay'],
})
export class UIHeaderComponent implements OnInit {
  private bgImgUrl: string;
  private label: string = 'Welcome';
  private overlay: boolean = false;
  private subLabel: string;

  constructor() { }
  ngOnInit() {}

}
