import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-historia-profile',
  templateUrl: './historia-profile.component.html',
  styleUrls: ['./historia-profile.component.scss'],
})
export class HistoriaProfileComponent implements OnInit {

  @Input() name: string;

  constructor() { 
  }

  ngOnInit() {}

}
