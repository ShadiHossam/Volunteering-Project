import { EventPostingService } from '../../../Services/EventsService/event-posting.service';
import { EventPosting } from '../../../Model/EventPosting';
import {
  Component,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-event-details-organization',
  templateUrl: './event-details-organization.component.html',
  styleUrls: ['./event-details-organization.component.css'],
})
export class EventDetailsOrganizationComponent implements OnInit {
  constructor(
    private EventPostingService: EventPostingService,
    private route: ActivatedRoute
  ) {}
  Id = this.route.snapshot.paramMap.get('id');

  Event: EventPosting = <EventPosting>{};

  ngOnInit(): void {
    this.EventPostingService.GetEvent(Number(this.Id)).subscribe((x: any) => {
      this.Event = <EventPosting>x;
    });
  }
  // showForEdit(emp: EventPosting) {
  //   this.EventPostingService.SelectedEvent = Object.assign({}, emp);
  // }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.EventPostingService.DeleteEvent(id).subscribe((x) => {
        this.EventPostingService.GetEventList().subscribe((data: any) => {
          this.Event = <EventPosting>data;
        });
      });
    }
  }
  Edit(Id, changes) {
    console.log(this.Event);
    if (confirm('Are you sure to Edit this record ?') == true) {
      debugger;
      console.log(this.Event.Id);
      this.EventPostingService.PutEvent(Id, changes).subscribe((data: any) => {
        this.Event = <EventPosting>data;
      });
    }
  }
  GetEvent(id: number) {
    this.EventPostingService.GetEvent(id).subscribe((x: any) => {
      this.Event = <EventPosting>x;
    });
  }
}
