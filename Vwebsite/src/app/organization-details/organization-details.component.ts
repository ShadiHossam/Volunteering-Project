import { Corporates } from './../Model/Corporates';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CorporatesService } from '../Services/Corporates/corporates.service';

@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.css'],
})
export class OrganizationDetailsComponent implements OnInit {
  Id;
  Corporates: Corporates = <Corporates>{};

  constructor(
    public CorporatesService: CorporatesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.Id = this.route.snapshot.paramMap.get('id');

    this.CorporatesService.GetCorporates(this.Id).subscribe((x: any) => {
      this.Corporates = <Corporates>x;
    });
  }
}
