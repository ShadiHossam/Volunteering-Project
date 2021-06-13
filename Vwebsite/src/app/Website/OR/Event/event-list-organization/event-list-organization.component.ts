import { Component, OnInit } from '@angular/core';

import { EventPostingService } from '../../../Services/EventsService/event-posting.service';
import { EventPosting } from '../../../Model/EventPosting';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list-organization',
  templateUrl: './event-list-organization.component.html',
  styleUrls: ['./event-list-organization.component.css'],
})
export class EventListOrganizationComponent implements OnInit {
  Events: EventPosting[];

  constructor(
    private router: Router,
    public EventPostingService: EventPostingService
  ) {}

  ngOnInit(): void {
    this.EventPostingService.GetEventList().subscribe((data) => {
      this.Events = data;
    });
  }

  EventId(eventId: number) {
    this.router.navigate(['/or-eventdetails', eventId]);
  }
}
