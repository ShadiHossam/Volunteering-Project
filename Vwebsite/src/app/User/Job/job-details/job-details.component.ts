import {
  Component,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { JobsService } from '../../../Services/JobsService/jobs.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.Id = this.route.snapshot.paramMap.get('id');

    this.JobsService.GetJob(Number(this.Id)).subscribe((x: any) => {
      this.Job = <Jobs>x;
    });
  }
  Apply() {
    this.router.navigate(['/jobform', this.Id]);
  }
}
