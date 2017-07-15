import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @Input('title') title: string = "Create post";

  opened: boolean = false;

  toggle() {
    this.opened = !this.opened;
  }

  constructor() { }

  ngOnInit() {
  }

}
