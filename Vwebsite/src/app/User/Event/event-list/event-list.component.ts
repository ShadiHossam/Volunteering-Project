import { Component, OnInit } from '@angular/core';

import { EventPostingService } from '../../../Services/event-posting.service';
import { EventPosting } from '../../../EventPosting';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
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

  showForEdit(emp: EventPosting) {
    this.EventPostingService.SelectedEvent = Object.assign({}, emp);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.EventPostingService.DeleteEvent(id).subscribe((x) => {
        this.EventPostingService.GetEventList().subscribe((data) => {
          this.Events = data;
        });
      });
    }
  }
  EventId(eventId: number) {
    this.router.navigate(['/eventdetails', eventId]);
  }
}
