import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../Services/LoginService/login.service';

import { EventPostingService } from '../../../Services/EventsService/event-posting.service';
import { EventPosting } from '../../../EventPosting';
import { Router } from '@angular/router';
import { Register } from '../../../Register';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  Events: EventPosting[];
  Event: Register;

  constructor(
    private router: Router,
    public EventPostingService: EventPostingService,
    private LoginService: LoginService
  ) {}

  ngOnInit(): void {
    this.LoginService.GetEventListByUserName().subscribe((data) => {
      this.Event = data;
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
