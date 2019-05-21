import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-comparar',
  templateUrl: './comparar.component.html',
  styleUrls: ['./comparar.component.scss'],
})
export class CompararComponent implements OnInit {

  @Input()
  usuarios: any;

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private storage: Storage) { }

  ngOnInit() { }

  comparar(usuario: string) {
    this.storage.set('retar', usuario).then(() => {
      this.router.navigateByUrl('/tabs/retar-detalle');
      this.modalCtrl.dismiss();
    })
  }
}
