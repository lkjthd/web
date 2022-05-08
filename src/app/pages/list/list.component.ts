import { Component, OnInit } from '@angular/core';
import { Insurance } from '../../shared/interfaces/insurance';
import { CrudService } from '../../shared/services/crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  mrIns: Insurance | null = null;
  lrIns: Insurance | null = null;

  constructor(private crudService: CrudService) { }
  ngOnInit(): void {
    this.crudService.getMostRecentInsurance().subscribe((insArr: Array<Insurance>) =>  {
      this.mrIns = insArr[0];
    });
    this.crudService.getLeastRecentInsurance().subscribe((insArr: Array<Insurance>) =>  {
      this.lrIns = insArr[0];
    });
  }
}
