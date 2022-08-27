
import { Component, OnInit } from '@angular/core';

import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  taskobj:Task= new Task();
  // contentobj:Task=new Task();
  // contentArr:Task[]=[];
  taskArr:Task[] = [];
  // addContentValue:string='';
  addTaskValue: string = '';
  editTaskValue : string = '';
  // editContentValue: string='';
 

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.editTaskValue = '';
    // this.editContentValue='';
    this.addTaskValue = '';
    // this.addContentValue='';
    this.taskobj = new Task();
    // this.contentobj=new Task();
    // this.contentArr=[];
    this.taskArr = [];
    // this.getAllContent();
    this.getAllTask();
  
  }
  getAllTask() {
    this.crudService.getAllTask().subscribe(res=>{
          this.taskArr =res;
    
        }, err => {
          alert("Unable to get list of tasks");
    
        });
  }
  
  // getAllContent() {
  //   this.crudService.getAllContent().subscribe(res=>{
  //     this.contentArr=res;
  //   },err=>{
  //     alert("Unable to get list of contents")
  //   })
  // }
  


  addTask() {
    this.taskobj.task_name = this.addTaskValue;
    this.crudService.addTask(this.taskobj).subscribe(res =>{
      this.ngOnInit();
      this.addTaskValue = '';

    }, err => {
      alert(err);
    })
  }
  // addContent() {
  //   this.contentobj.content = this.addContentValue;
  //   this.crudService.addContent(this.contentobj).subscribe(res => {
  //     this.ngOnInit();
  //     this.addContentValue = '';


  //   }, err => {
  //     alert(err);
  //   })
  // }
  editTask(){
    this.taskobj.task_name = this.editTaskValue;
    this.crudService.editTask(this.taskobj).subscribe(res=>{
      this.ngOnInit();
    }, err=> {
      alert("Failed to Update task");
    })
  }
  // editContent(){
  //   this.contentobj.content=this.editContentValue;
  //   this.crudService.editContent(this.contentobj).subscribe(res=>{
  //     this.ngOnInit();
  //   },err=>{
  //     alert("Failed to Update content");
  //   })
  // }
  deleteTask(etask : Task){
    this.crudService.deleteTask(etask).subscribe(res=>{
      this.ngOnInit();

    }, err=> {
      alert("Failed to delete label");
    });
  }
  // deleteContent (econtent:Task){
  //   this.crudService.deleteContent(econtent).subscribe(res=>{
  //     this.ngOnInit();

  //   },err=>{
  //     alert("Failed to delete content");
  //   })
  // }
  call(etask:Task){
    this.taskobj = etask;
    this.editTaskValue = etask.task_name;
  }
  // Call(econtent:Label){
  //   this.contentobj = econtent;
  //   this.editContentValue = econtent.label;
  // }

}
