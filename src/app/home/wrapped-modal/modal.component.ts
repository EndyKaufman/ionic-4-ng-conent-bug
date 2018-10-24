import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wrapped-app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class WrappedModalComponent implements OnInit {
  @Input()
  message: string;
  constructor() { }

  ngOnInit() {
  }

}
