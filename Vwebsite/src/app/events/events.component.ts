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
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventPostingService } from '../Services/event-posting.service';
import { EventPosting } from '../EventPosting';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  EventForm: FormGroup = new FormGroup({});
  data = false;
  massage: string;
  EventData;
  Event: any;
  x: string;

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  closeResult = '';

  model: NgbDateStruct;

  constructor(
    private modalService: NgbModal,
    private EventPostingService: EventPostingService,
    private formbulider: FormBuilder,
    public dialog: MatDialog,
    private http: HttpClient,
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
          Validators.pattern(
            '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
          ),
        ],
      ],
      Language: ['', [Validators.required]],
      Location: ['', [Validators.required]],
      Country: ['', [Validators.required]],
      City: ['', [Validators.required]],
      EventName: ['', [Validators.required]],
    });
    this.EventPostingService.GetEvents().subscribe((data) => {
      this.EventData = data;
    });
  }
  get f() {
    return this.EventForm.controls;
  }
  onFormSubmit(events) {
    this.CreateEvents(events);
    if (this.EventForm.invalid) {
      return;
    }
  }
  CreateEvents(eventposting: EventPosting) {
    this.EventPostingService.CreateEvent(eventposting).subscribe(() => {
      this.data = true;
      this.massage = 'Data saved Successfully';
      this.EventForm.reset();
    });
  }
  GetThisEvent(x): Observable<EventPosting> {
    {
      return this.http.get<EventPosting>(
        'http://localhost:49826/Api/EventPostings/' + this.x
      );
    }
  }
}
