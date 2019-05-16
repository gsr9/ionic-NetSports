import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/event';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.page.html',
  styleUrls: ['./show-event.page.scss'],
})
export class ShowEventPage implements OnInit {

  event: Event;

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.event = params['evento']; 
 });
    
  }

  ngOnInit() {
    console.log(this.event);
  }

}
