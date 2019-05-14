import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wall-item',
  templateUrl: './wall-item.component.html',
  styleUrls: ['./wall-item.component.scss'],
})
export class WallItemComponent implements OnInit {


  @Input() title: string;
  constructor() { }

  ngOnInit() {}

}
