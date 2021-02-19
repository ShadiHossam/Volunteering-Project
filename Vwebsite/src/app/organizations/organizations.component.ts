import { Component, OnInit } from '@angular/core';
import { Corporates } from '../Model/Corporates';
import { CorporatesService } from '../Services/Corporates/corporates.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css'],
})
export class OrganizationsComponent implements OnInit {
  CorporatesData: Corporates[];
  constructor(public CorporatesService: CorporatesService) {}

  ngOnInit(): void {
    this.CorporatesService.GetCorporatesList().subscribe((data) => {
      this.CorporatesData = <Corporates[]>data;
    });
  }
}
