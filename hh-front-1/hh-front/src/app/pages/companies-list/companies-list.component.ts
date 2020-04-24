import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {

  public companies = []
  
  constructor(private companiService: CompanyService) { }

  ngOnInit(): void {
    this.companiService.getCompanies().subscribe(companies => {
      this.companies = companies
    })
  }

}
