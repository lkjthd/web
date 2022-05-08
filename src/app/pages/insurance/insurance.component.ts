import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CrudService } from '../../shared/services/crud.service';
import { Router } from '@angular/router';
import { Insurance } from '../../shared/interfaces/insurance';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
  constructor(private router: Router, private crudService: CrudService) { }
  ngOnInit(): void {}

  insuranceForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    carType: new FormControl('')
  });

  submit() {
    const ins: Insurance = {
      id: this.generateId(),
      firstName: this.insuranceForm.get('firstName')?.value,
      lastName: this.insuranceForm.get('lastName')?.value,
      carType: this.insuranceForm.get('carType')?.value,
      dateSubmitted: new Date().valueOf()
    };

    this.crudService.create(ins)
    .then(_ => this.router.navigateByUrl('/list'))
    .catch((error: any) => {
      console.error(error);
    });
  }

  generateId(): string {
    let ret: string = '';
    let charset: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    for (let i = 0; i < 20; i++)
      ret += charset.charAt(Math.floor(Math.random() * charset.length));

    return ret;
  }
}
