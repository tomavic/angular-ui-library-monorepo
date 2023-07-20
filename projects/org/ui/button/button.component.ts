import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `Hi, I am a Button `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
