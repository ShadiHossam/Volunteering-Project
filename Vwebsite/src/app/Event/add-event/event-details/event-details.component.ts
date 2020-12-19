import {
  Component,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { EventPostingService } from '../../../Services/event-posting.service';
import { ActivatedRoute } from '@angular/router';
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
  Event;
  //Job: JobPosting = <JobPosting>{};

  GetEvent(id: number) {
    this.EventPostingService.GetEvent(id).subscribe((x) => {
      x = this.Event;
    });
  }
  ngOnInit(): void {
    console.log(this.Id);
    this.EventPostingService.GetEvent(Number(this.Id)).subscribe((x) => {
      this.Event = x;
    });
  }
}
