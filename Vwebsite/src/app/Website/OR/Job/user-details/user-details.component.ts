import { FormBuilder } from '@angular/forms';
import { JobApplianceStatus } from './../../../Model/JobApplianceStatus';
import { JobApply } from './../../../Model/JobApply';
import { Component, OnInit } from '@angular/core';
import { JobApplyService } from '../../../Services/JobApply/job-apply.service';
import { JobApplianceStatusService } from '../../../Services/JobApplianceStatus/job-appliance-status.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  Id;
  JobApply: JobApply[];
  JobApplianceStatus: JobApplianceStatus;
  form;
  xx;
  constructor(
    private JobApplyService: JobApplyService,
    private JobApplianceStatusService: JobApplianceStatusService,
    private route: ActivatedRoute,
    private router: Router,
    private formbulider: FormBuilder
  ) {}

  async ngOnInit(): Promise<void> {
    this.form = this.formbulider.group({
      JobApplyStatusId: [''],
    });
    this.Id = this.route.snapshot.paramMap.get('id');
    this.JobApplyService.GetJobApply(this.Id)
      .toPromise()
      .then((y: any) => {
        this.JobApply = y;
      });
    this.JobApply = await this.JobApplyService.GetJobApply(this.Id).toPromise();
  }
  Accept() {
    this.form.get('JobApplyStatusId').setValue('1');
    this.JobApplyService.PutJobApply(this.Id, this.form).subscribe((x) => {
      this.xx = x;
    });
  }
  Reject() {
    this.form.get('JobApplyStatusId').setValue('2');
    this.JobApplyService.PutJobApply(this.Id, this.form).subscribe((x) => {
      this.xx = x;
    });
  }

  checkifaccepted() {
    if (this.JobApply.map((x) => x.JobApplyStatusId == 1)) {
      // return true;
      this.cvc = true;
    } else {
      // return false;
      this.cvc = false;
    }
  }
  cvc;
  cccc;
  checkifrejected() {
    if (this.JobApply.map((x) => x.JobApplyStatusId == 2)) {
      //return true;
      this.cccc = true;
    } else {
      // return false;
      this.cccc = false;
    }
  }
}
