import { Component, Input, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'wrapped-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.css']
})
export class WrappedDefaultPageComponent implements OnInit {
  @Input()
  title = 'empty';
  @ViewChild('workaround')
  workaround: TemplateRef<any>;
  constructor() { }
  ngOnInit() {
  }
}
