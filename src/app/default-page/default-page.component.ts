import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.css']
})
export class DefaultPageComponent implements OnInit {
  @Input()
  title = 'empty';
  constructor() { }
  ngOnInit() {
  }
}
