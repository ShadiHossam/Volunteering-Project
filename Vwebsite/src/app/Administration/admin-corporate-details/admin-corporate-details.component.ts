import { Component, OnInit } from '@angular/core';
import { CorporatesService } from '../../Website/Services/Corporates/corporates.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Corporates } from 'src/app/Website/Model/Corporates';
@Component({
  selector: 'app-admin-corporate-details',
  templateUrl: './admin-corporate-details.component.html',
  styleUrls: ['./admin-corporate-details.component.css'],
})
export class AdminCorporateDetailsComponent implements OnInit {
  Id;
  Corporates: Corporates = <Corporates>{};
  constructor(
    private CorporatesService: CorporatesService,
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
