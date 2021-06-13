import {
  Component,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Corporates } from './../../../Model/Corporates';

import { JobsService } from '../../../Services/JobsService/jobs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CorporatesService } from '../../../Services/Corporates/corporates.service';
import { JobApply } from './../../../Model/JobApply';
import { JobApplyService } from '../../../Services/JobApply/job-apply.service';

import { Jobs } from 'src/app/Website/Model/Jobs';
@Component({
  selector: 'app-job-details-organization',
  templateUrl: './job-details-organization.component.html',
  styleUrls: ['./job-details-organization.component.css'],
})
export class JobDetailsOrganizationComponent implements OnInit {
  Id;
  Job: Jobs = <Jobs>{};
  x = localStorage.getItem('Corporate');
  JobApply: JobApply[];
  Corporate: Corporates;

  constructor(
    private JobsService: JobsService,
    private route: ActivatedRoute,
    private CorporatesService: CorporatesService,
    private JobApplyService: JobApplyService,

    private router: Router
  ) {}

  // GetJob(id: number) {
  //   this.JobsService.GetJob(id).subscribe((x) => {
  //     x = this.Job;
  //   });
  // }
  async ngOnInit(): Promise<void> {
    this.Id = this.route.snapshot.paramMap.get('id');

    this.JobsService.GetJob(Number(this.Id)).subscribe((x: any) => {
      this.Job = <Jobs>x;
    });
    this.CorporatesService.GetCorporateByUserName(this.x)
      .toPromise()
      .then((data) => {
        this.Corporate = data;
      });
    this.Corporate = await this.CorporatesService.GetCorporateByUserName(
      this.x
    ).toPromise();
    this.JobApplyService.GetJobApply(this.Corporate.Id)
      .toPromise()
      .then((y: any) => {
        this.JobApply = y;
      });
    this.JobApply = await this.JobApplyService.GetJobApply(
      this.Corporate.Id
    ).toPromise();
  }
  Edit(Id, changes) {
    if (confirm('Are you sure to Edit this record ?') == true) {
      debugger;
      this.JobsService.PutJob(Id, changes).subscribe((data: any) => {
        this.Job = <Jobs>data;
      });
    }
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.JobsService.DeleteJob(id).subscribe((x) => {
        this.JobsService.GetJobList().subscribe((data: any) => {
          this.Job = <Jobs>data;
        });
      });
    }
  }
  JobForm() {
    this.router.navigate(['/or-addjobform/' + this.Id]);
  }
  JobAppliance() {
    this.router.navigate(['/or-jobappliance/' + this.Id]);
  }
  showapply() {
    if (
      this.JobApply &&
      this.JobApply.find((x) => x.JobId === Number(this.Id))
    ) {
      return false;
    }
    return true;
  }
  showform() {
    if (
      this.JobApply &&
      this.JobApply.find((x) => x.JobId === Number(this.Id))
    ) {
      return true;
    }
    return false;
  }
}
