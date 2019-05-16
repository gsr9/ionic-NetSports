import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/event';
import { EventsService } from 'src/app/services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.page.html',
  styleUrls: ['./show-event.page.scss'],
})
export class ShowEventPage implements OnInit {

  event: Event;

  constructor(private router: Router,public eventsService: EventsService) { 

  }

  ngOnInit() {
    this.event = this.eventsService.getShowEvent();
    if(!this.event){
      this.router.navigate(['/tabs/events'])
    }
  }

}
