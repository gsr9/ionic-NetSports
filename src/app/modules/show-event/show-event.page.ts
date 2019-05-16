import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/event';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.page.html',
  styleUrls: ['./show-event.page.scss'],
})
export class ShowEventPage implements OnInit {

  event: any;

  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.event = params['evento'];
      console.log(params)
      console.log(this.event)
  });

  }

}
