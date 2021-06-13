import { JobApply } from './../../../Model/JobApply';
import { Component, OnInit } from '@angular/core';
import { JobApplyService } from '../../../Services/JobApply/job-apply.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job-appliance',
  templateUrl: './job-appliance.component.html',
  styleUrls: ['./job-appliance.component.css'],
})
export class JobApplianceComponent implements OnInit {
  Id;
  JobApply: JobApply[];

  constructor(
    private JobApplyService: JobApplyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.Id = this.route.snapshot.paramMap.get('id');
    this.JobApplyService.GetJobApplyByJobId(this.Id)
      .toPromise()
      .then((y: any) => {
        this.JobApply = y;
      });
    this.JobApply = await this.JobApplyService.GetJobApply(this.Id).toPromise();
  }
  UserDetails(id) {
    this.router.navigate(['/or-userdetails/' + id]);
  }
}
