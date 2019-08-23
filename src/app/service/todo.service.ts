import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable, of, interval } from 'rxjs';
import { face } from '../app.component';
import { mapTo, delay, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _snackBar: MatSnackBar) { }
   

  public displaymessage(message:string,message1:string) 
  {
    this._snackBar.open(message, message1, { duration: 2000});
  }


  public checkSnackBar(task) {

    if(task.done!=true)
    {
      this.displaymessage(task.task,"Completed");
    }
    else
    {
      this.displaymessage(task.task,"Pending");
    }

  }
  public array1:face[]=[
    {priority:1,task:"Run",done:false},
    {priority:2,task:"Eat",done:false}
  ];
  public newtask:string;

  public addnewtask(newtask):void{
    
    this.array1.push({priority:this.array1.length+1,task:this.newtask,done:false});
    this.displaymessage(newtask,"Task Added");
    this.newtask="";
    
  }

    public newstatus(task):void{
      
      let position=this.array1.indexOf(task);
      this.array1.splice(position,1);
      this.displaymessage(task.task,"Deleted");
    }


  public getTasks():Observable<face[]>{
    return of(this.array1).pipe(delay(2000));

  }

  public timer():Observable<any>
    {

      return interval(2000).pipe(map(res=>res++));

      
    }
}
