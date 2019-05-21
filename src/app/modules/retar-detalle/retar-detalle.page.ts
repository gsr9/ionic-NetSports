import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retar-detalle',
  templateUrl: './retar-detalle.page.html',
  styleUrls: ['./retar-detalle.page.scss'],
})
export class RetarDetallePage implements OnInit {

  otherUser = '';
  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {
    this.storage.get('retar').then(usuario => this.otherUser = usuario);
  }

  ngOnChanges() {
    this.storage.get('retar').then(usuario => this.otherUser = usuario);
    
  }

  navigateBack(){
    this.router.navigateByUrl('/tabs/wall');
  }
}
