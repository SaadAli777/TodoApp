import { Component, OnInit,Input } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  

  
  @Input() array;
  constructor(private todoService:TodoService) { }
  

  ngOnInit() {

    
  }
  

}
