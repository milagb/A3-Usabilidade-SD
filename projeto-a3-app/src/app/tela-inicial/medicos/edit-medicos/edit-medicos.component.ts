import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup'
import { ApiService } from "src/app/api.service";

@Component({
  selector: 'app-edit-medicos',
  templateUrl: './edit-medicos.component.html',
  styleUrls: ['./edit-medicos.component.scss']
})
export class EditMedicosComponent implements OnInit {

  isSubmitted: boolean = false;
  employeeId: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['employeeId'];
    this.getEmployeeDetailById();
  }

  getEmployeeDetailById() {
    // this.httpProvider.getEmployeeDetailById(this.employeeId).subscribe((data: any) => {
    //   if (data != null && data.body != null) {
    //     var resultData = data.body;
    //     if (resultData) {
    //       this.editEmployeeForm.Id = resultData.id;
    //       this.editEmployeeForm.Nome = resultData.firstName;
    //       this.editEmployeeForm.LastName = resultData.lastName;
    //       this.editEmployeeForm.Email = resultData.email;
    //       this.editEmployeeForm.Address = resultData.address;
    //       this.editEmployeeForm.Phone = resultData.phone;
    //     }
    //   }
    // },
    //   (error: any) => { });
  }

  EditEmployee(isValid: any) {
    // this.isSubmitted = true;
    // if (isValid) {
    //   this.httpProvider.saveEmployee(this.editEmployeeForm).subscribe(async data => {
    //     if (data != null && data.body != null) {
    //       var resultData = data.body;
    //       if (resultData != null && resultData.isSuccess) {
    //         if (resultData != null && resultData.isSuccess) {
    //           this.toastr.success(resultData.message);
    //           setTimeout(() => {
    //             this.router.navigate(['/Home']);
    //           }, 500);
    //         }
    //       }
    //     }
    //   },
    //     async error => {
    //       this.toastr.error(error.message);
    //       setTimeout(() => {
    //         this.router.navigate(['/Home']);
    //       }, 500);
    //     });
    // }
  }

}
