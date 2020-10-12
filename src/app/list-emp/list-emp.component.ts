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
    
     this.empService.getEmp().subscribe( data => {
      this.arr  = data; 
    })
  }
  onDelete(employee) {
    let index = this.arr.indexOf(employee);
    this.arr.splice(index,1);
  }
  
  
//   onEdit(employee : Employee){

//     localStorage.removeItem('editEmp');
//     localStorage.setItem('editEmp', employee.id.toString());
//     this.router.navigate(['add-emp']);

// }
}
