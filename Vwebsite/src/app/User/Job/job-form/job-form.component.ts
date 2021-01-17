import { JobForm } from './../../../JobForm';
import { Component, OnInit } from '@angular/core';
import { JobFormService } from '../../../Services/JobForm/job-form.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css'],
})
export class JobFormComponent implements OnInit {
  Id;
  JobForm: JobForm = <JobForm>{};
  showText = false;
  showChoice = false;
  constructor(
    private JobFormService: JobFormService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.Id = this.route.snapshot.paramMap.get('id');
    this.JobFormService.GetJobForm(this.Id).subscribe((x: any) => {
      this.JobForm = <JobForm>x;
    });
  }
  Type() {
    if (this.JobForm.Type === 'TextBox') {
      return (this.showText = true);
    } else {
      return (this.showChoice = true);
    }
  }
}
