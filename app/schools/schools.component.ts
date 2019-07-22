import { Component, OnInit } from '@angular/core';
import {School} from '../school';
import { SCHOOLS } from '../schools-list';
import { SchoolService } from '../service/school.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  selectedSchool: School;
  schools: School[];

constructor(private schoolService: SchoolService) { }

getSchools(): void {
  this.schools = this.schoolService.getSchools();
}

  ngOnInit() {
    this.getSchools();
  }

onSelect(school: School): void {
  this.selectedSchool = school;
}

}
