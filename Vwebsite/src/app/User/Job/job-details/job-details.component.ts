import {
  Component,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { JobsService } from '../../../Services/jobs.service';
import { ActivatedRoute } from '@angular/router';
import { Jobs } from 'src/app/Jobs';
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent implements OnInit {
  Id;
  Job: Jobs = <Jobs>{};

  constructor(
    private JobsService: JobsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Id = this.route.snapshot.paramMap.get('id');

    this.JobsService.GetJob(Number(this.Id)).subscribe((x: any) => {
      this.Job = <Jobs>x;
    });
  }
}
