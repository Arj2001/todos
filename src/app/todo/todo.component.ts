import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private myApi:ApiService) {
    this.putTodo()
   }

  putTodo=()=>{
    this.myApi.getTodo().subscribe(
      (data)=>{
        this.todoData =data
      }
    )
  }

  todoData:any = []

  ngOnInit(): void {
  }

}
