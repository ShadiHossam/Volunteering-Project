import {
  Component,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { EventPostingService } from '../../../Services/EventsService/event-posting.service';
import { ActivatedRoute } from '@angular/router';
import { EventPosting } from 'src/app/Website/Model/EventPosting';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  constructor(
    private EventPostingService: EventPostingService,
    private route: ActivatedRoute
  ) {}
  Id = this.route.snapshot.paramMap.get('id');
  Event: EventPosting = <EventPosting>{};

  GetEvent(id: number) {
    this.EventPostingService.GetEvent(id).subscribe((x: any) => {
      this.Event = <EventPosting>x;
    });
  }
  ngOnInit(): void {
    this.EventPostingService.GetEvent(Number(this.Id)).subscribe((x: any) => {
      this.Event = <EventPosting>x;
    });
  }
}
