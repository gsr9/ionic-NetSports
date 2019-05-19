import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-usuario',
  templateUrl: './item-usuario.component.html',
  styleUrls: ['./item-usuario.component.scss'],
})
export class ItemUsuarioComponent implements OnInit {

  @Input() nombre: string;

  constructor() { }

  ngOnInit() {}

}
