import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-historia-other',
  templateUrl: './historia-other.component.html',
  styleUrls: ['./historia-other.component.scss'],
})
export class HistoriaOtherComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {}

}
