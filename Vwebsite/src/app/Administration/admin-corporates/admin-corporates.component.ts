import { Component, OnInit } from '@angular/core';
import { CorporatesService } from '../../Website/Services/Corporates/corporates.service';
import { Router } from '@angular/router';
import { Corporates } from '../../Website/Model/Corporates';

@Component({
  selector: 'app-admin-corporates',
  templateUrl: './admin-corporates.component.html',
  styleUrls: ['./admin-corporates.component.css'],
})
export class AdminCorporatesComponent implements OnInit {
  Corporates: Corporates[];

  constructor(
    public CorporatesService: CorporatesService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.CorporatesService.GetCorporatesList()
      .toPromise()
      .then((data) => {
        this.Corporates = data;
      });
    this.Corporates = await this.CorporatesService.GetCorporatesList().toPromise();
  }
  CorporatesId(CorporateId: string) {
    this.router.navigate(['/admin-corporatedetails', CorporateId]);
  }
}
