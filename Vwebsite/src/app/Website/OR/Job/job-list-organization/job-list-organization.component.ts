import { Corporates } from './../../../Model/Corporates';
import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../../Services/JobsService/jobs.service';
import { CorporatesService } from '../../../Services/Corporates/corporates.service';
import { Jobs } from '../../../Model/Jobs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list-organization',
  templateUrl: './job-list-organization.component.html',
  styleUrls: ['./job-list-organization.component.css'],
})
export class JobListOrganizationComponent implements OnInit {
  constructor(
    private router: Router,
    private JobsService: JobsService,
    private CorporatesService: CorporatesService
  ) {}
  Jobs: Jobs[];
  Corporate: Corporates;
  x = localStorage.getItem('Corporate');
  async ngOnInit(): Promise<void> {
    this.CorporatesService.GetCorporateByUserName(this.x)
      .toPromise()
      .then((data) => {
        this.Corporate = data;
      });
    this.Corporate = await this.CorporatesService.GetCorporateByUserName(
      this.x
    ).toPromise();

    this.JobsService.GetJobsByCorporateId(this.Corporate.Id).subscribe(
      (data) => {
        this.Jobs = data;
      }
    );
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.JobsService.DeleteJob(id).subscribe((x) => {
        this.JobsService.GetJobList().subscribe((data) => {
          this.Jobs = data;
        });
      });
    }
  }

  JobId(jobId: string) {
    this.router.navigate(['/or-jobdetails/', jobId]);
  }
}
