import { Injectable } from '@angular/core';
import { School } from '../school';
import { SCHOOLS } from '../schools-list';


@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  getSchools(): School[] {
    return SCHOOLS;
  }
  constructor() { }
}
