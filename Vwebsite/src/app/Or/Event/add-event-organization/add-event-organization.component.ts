import { Component, ViewChild, OnInit } from '@angular/core';
import {
  NgbDateStruct,
  NgbModal,
  ModalDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  NgForm,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventPostingService } from '../../../Services/event-posting.service';
import { JobTypesService } from '../../../Services/job-types.service';
import { CitiesService } from '../../../Services/cities.service';
import { CountiesService } from '../../../Services/counties.service';
import { EventPosting } from '../../../EventPosting';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-event-organization',
  templateUrl: './add-event-organization.component.html',
  styleUrls: ['./add-event-organization.component.css'],
})
export class AddEventOrganizationComponent implements OnInit {
  EventForm: FormGroup = new FormGroup({});
  data = false;
  massage: string;
  EventData;
  Event: any;
  x: string;
  JobTypes: any;
  Cities: any;
  Countries: any;

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  closeResult = '';

  model: NgbDateStruct;

  constructor(
    private modalService: NgbModal,
    public EventPostingService: EventPostingService,
    private JobTypesService: JobTypesService,
    private CitiesService: CitiesService,
    private CountriesService: CountiesService,
    private formbulider: FormBuilder,
    public dialog: MatDialog,
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing the mouse';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.EventForm = this.formbulider.group({
      EventDescription: ['', [Validators.required]],
      EventHeadline: ['', [Validators.required]],
      EventDate: ['', [Validators.required]],
      TicketLink: [
        '',
        [
          Validators.required,
          // Validators.pattern(
          //   '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
          // ),
        ],
      ],
      Language: ['', [Validators.required]],
      Location: ['', [Validators.required]],
      CountryId: ['', [Validators.required]],
      CitiesId: ['', [Validators.required]],
      EventName: ['', [Validators.required]],
      JobTypeId: ['', [Validators.required]],
    });
    this.JobTypesService.GetJobs().subscribe((res) => {
      this.JobTypes = res;
    });
    this.CitiesService.GetCities().subscribe((res) => {
      this.Cities = res;
    });
    this.CountriesService.GetCountries().subscribe((res) => {
      this.Countries = res;
    });
  }

  get f() {
    return this.EventForm.controls;
  }
  onFormSubmit(events) {
    console.log(events);
    debugger;
    this.CreateEvents(events);
    if (this.EventForm.invalid) {
      return;
    }
  }
  CreateEvents(eventposting: EventPosting) {
    this.EventPostingService.PostEvent(eventposting).subscribe(() => {
      this.data = true;
      this.massage = 'Data saved Successfully';
      this.EventForm.reset();
      this.router.navigate(['/or-eventlist']);
    });
  }

  // onSubmit(EventForm) {
  //   if (EventForm.value.Id == null) {
  //     this.EventPostingService.PostEvent(EventForm.value).subscribe((data) => {
  //       this.EventPostingService.GetEventList();
  //     });
  //   } else {
  //     this.EventPostingService.PutEvent(
  //       EventForm.value.Id,
  //       EventForm.value
  //     ).subscribe((data) => {
  //       this.EventPostingService.GetEventList();
  //     });
  //   }
  // }
}
