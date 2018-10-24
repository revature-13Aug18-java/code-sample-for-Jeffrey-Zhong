import { Component, OnInit } from '@angular/core';
import { Time } from '../../../../node_modules/@angular/common';
import { AuthService } from '../../auth.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {

    // Instance of should be: 
    // NavigationEnd
    // NavigationCancel
    // NavigationError
    // RoutesRecognized

  }

  private rbID: number;
  private amount: number;
  private submitted: Time;
  private resolved: Time;
  private description: string;
  private receipt: Blob;
  private author: number;
  private resolver: number;
  private statusID: number;
  private typeID: number;
  public rbarray: any[];
  public employee: any[];
  private length: number;

  
  servletData: any;
  id: number;
  private sub: any;
  private type: string;

  private orderbool: boolean;

  getEmployee(){
    this.authService.getAllEmployee().subscribe(
      data => { 
        this.employee = data;
        length = this.employee.length;

        console.log(this.employee);
      })
  }

  getEmployeeByID(idd :number){
    for(let i = 0; i< length; i++){
      if(this.employee[i].empID == idd){
        return this.employee[i].firstname + ' ' + this.employee[i].lastname;
      }
    }
  
  }


  submitReimbursement() {
    this.authService.submitReimbursement(this.id, this.amount, this.convertType(this.type), this.description).subscribe(
      data => {
        console.log(data);
        this.getReimbursement();
      })
  };

  getSortOrder(order: string) {

  }
  getReimbursementOrder(order: string) {
    if (this.orderbool) {
      this.authService.getReimbursementOrder(this.id, order).subscribe(
        data => {

          this.rbarray = data
          this.rbID = data.rbID;
          this.amount = data.amount;
          this.submitted = data.submitted;
          this.resolved = data.resolved;
          this.description = data.description;
          this.receipt = data.receipt;
          this.author = data.author;
          this.resolver = data.resolver;
          this.statusID = data.statusID;
          this.typeID = data.typeID;

          this.orderbool = false;
        }
      );
    }
    else {
      
      this.authService.getReimbursementOrder(this.id, order + " desc").subscribe(
        data => {

          this.rbarray = data
          this.rbID = data.rbID;
          this.amount = data.amount;
          this.submitted = data.submitted;
          this.resolved = data.resolved;
          this.description = data.description;
          this.receipt = data.receipt;
          this.author = data.author;
          this.resolver = data.resolver;
          this.statusID = data.statusID;
          this.typeID = data.typeID;

          this.orderbool = true;
        }

      );
    }
  }


    logout(){
      this.router.navigateByUrl('login');
    }
    getReimbursement() {
      this.authService.getReimbursement(this.id).subscribe(
        data => {

          this.rbarray = data
          this.rbID = data.rbID;
          this.amount = data.amount;
          this.submitted = data.submitted;
          this.resolved = data.resolved;
          this.description = data.description;
          this.receipt = data.receipt;
          this.author = data.author;
          this.resolver = data.resolver;
          this.statusID = data.statusID;
          this.typeID = data.typeID;


          

          // this.rbID = data.rbID
          // this.servletFirst = data.firstname;
          // this.servletLast = data.lastname;
          // this.servletUsername = data.username;
          // this.servletEmail = data.email;
          // this.servletEmpID = data.empID;
          // this.servletroleID = data.roleID;
        }
      );
    }

    convertType(type : String){
      if (type == 'Lodging') {
        return 1;
      }
      else if (type == 'Travel') {
        return 2;
      }
      else if (type == 'Food') {
        return 3;
      }
      else if (type == 'Certification') {
        return 4;
      }
      else
        return 5;
    }

    convertTypeID(tid : number){
      if (tid == 1) {
        return 'Lodging';
      }
      else if (tid == 2) {
        return 'Travel';
      }
      else if (tid == 3) {
        return 'Food';
      }
      else if (tid == 4) {
        return 'Certification';
      }
      else if (tid == 5) {
        return 'Maternity Leave';
      }
      else {
        return 'No type';
      }
    }

    convertStatusID(tid : number){
      if (tid == 1) {
        return 'Pending';
      }
      else if (tid == 2) {
        return 'Approved';
      }
      else if (tid == 3) {
        return 'Denied';
      }
      else if (tid == 4) {
        return 'Revised';
      }
      else {
        return 'No status';
      }
    }





    ngOnInit() {

      this.sub = this.route.params.subscribe(params => {
        this.id = +params['servletEmpID']; // (+) converts string 'id' to a number
        this.getReimbursement();
        this.getEmployee();
        // In a real app: dispatch action to load the details here.
      });
    }

  }
