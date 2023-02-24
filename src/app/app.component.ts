import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular Crud';
  msg:string='';
  employees=[
    {'name':'Maria', 'position':'Designer', 'email':'m@gmail.com'},
    {'name':'Pablo', 'position':'Scrum Master', 'email':'p@gmail.com'},
    {'name':'Diego', 'position':'Programmer', 'email':'d@gmail.com'}
  ];

  model:any={}
  model2:any={}

  hideUpdate:boolean = true;
  // Metodos
  // Como no retorna nada le pongo void
  addEmployee():void{
    this.employees.push(this.model)
    this.msg='campo agregado';
  }
  
  deleteEmployee(i:number):void{
    let answer= confirm('Estas seguro querer eliminarl0');
    if(answer){
      this.employees.splice(i,1);
      this.msg='Campo eliminado'
    }
  }
  myvalue!:number;
  editEmployee(i:number):void{
    this.model2.name= this.employees[i].name;
    this.model2.position= this.employees[i].position;
    this.model2.email= this.employees[i].email;
    this.myvalue=i;
    this.hideUpdate=false;
  }
  
  updateEmployee():void{
    let i = this.myvalue;
    for(let j=0; j< this.employees.length; j++){
      if(i==j){
        this.employees[i] = this.model2;
        this.msg='Campo actualizado'
        this.model2= {};
      }
    }
    this.hideUpdate=true;
  }
  closeAlert(){
    this.msg='';
  }
}