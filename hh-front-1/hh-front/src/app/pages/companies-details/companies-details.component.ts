import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-companies-details',
  templateUrl: './companies-details.component.html',
  styleUrls: ['./companies-details.component.css']
})
export class CompaniesDetailsComponent implements OnInit {
  public id = this.route.snapshot.paramMap.get('company_id')
  
  public company
  public vacancies

  constructor(private companyService: CompanyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.companyService.getVacancies(this.id).subscribe(vacancies => {
      this.vacancies = vacancies
    })
    this.companyService.getCompany(this.id).subscribe(company => {
      this.company = company
    })
  }

}
