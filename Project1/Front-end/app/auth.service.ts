import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>("http://localhost:8082/Project1/login.ng", {username: username, password: password});
  }
  getAllReimbursement(): Observable<any> {
    return this.http.post<any>("http://localhost:8082/Project1/getAllReimbursement.ng", {});
  }
  getReimbursement(empID: number): Observable<any> {
    return this.http.post<any>("http://localhost:8082/Project1/getReimbursement.ng", {empID: empID});
  }
  submitReimbursement(author: number, amount: number, typeid: number, description: string): Observable<any> {
    return this.http.post<any>("http://localhost:8082/Project1/submitReimbursement.ng", {author: author, amount: amount, typeID: typeid, description: description});
  }
  approveReimbursement(rbID: number, resolver: number): Observable<any> {
    return this.http.post<any>("http://localhost:8082/Project1/approveReimbursement.ng", {rbID: rbID, resolver: resolver });
  }
  denyReimbursement(rbID: number, resolver: number): Observable<any> {
    return this.http.post<any>("http://localhost:8082/Project1/denyReimbursement.ng", {rbID: rbID, resolver: resolver });
  }
  getReimbursementOrder(empID: number, lastname: string): Observable<any> {
    return this.http.post<any>("http://localhost:8082/Project1/getReimbursementOrder.ng", {empID: empID, lastname: lastname });
  }
  getAllReimbursementOrder(description: string): Observable<any> {
    return this.http.post<any>("http://localhost:8082/Project1/getAllReimbursementOrder.ng", {description: description});
  }
  getAllEmployee(): Observable<any> {
    return this.http.post<any>("http://localhost:8082/Project1/getAllEmployee.ng", {});
  }
}