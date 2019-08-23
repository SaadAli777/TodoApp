import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { TodoService } from './service/todo.service';
import { Observable } from 'rxjs';


export interface face{

  priority:number;
  task:string;
  done:boolean;
  }
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public times:Observable<any>;
  public array:face[]=[];

  ngOnInit(): void {

      this.todoService.getTasks().subscribe((res:face[])=>{
        this.array=res;
      });
      this.times=this.todoService.timer();

  }
  constructor(private _snackBar: MatSnackBar,private todoService:TodoService) {}
    

}
