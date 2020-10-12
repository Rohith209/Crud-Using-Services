import { AppModule } from './../app.module';
import { EmployeeService } from './../Services/employee.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {
employees : any = [];
arr;
  constructor(private empService : EmployeeService) { }

  ngOnInit(){
    
    //  this.empService.getEmp().subscribe( data => {
    //   this.arr  = data; 
   // })
   this.employees = this.empService.getEmp();
  }
  onDelete(employee) {
    let index = this.employees.indexOf(employee);
    this.employees.splice(index,1);
  }
}
