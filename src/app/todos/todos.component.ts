import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  addTodos() {
    throw new Error('Method not implemented.');
  }
  constructor(private todoService: TodosService) {}

  todosArr: Todo[] = [];
  inputTodo: string = '';
  onLoad: boolean = false;
  async ngOnInit(): Promise<void> {
    this.todosArr = await this.todoService.getTodos();
    this.onLoad = true;
  }
  async addTodo(): Promise<void> {
    if (this.inputTodo.length == 0) {
      throw new Error('inseririsci testo');
    }
    let todo: Todo = {
      id:
        this.todosArr === undefined || this.todosArr.length === 0
          ? 1
          : this.todosArr[this.todosArr.length - 1].id + 1,
      title: this.inputTodo,
      completed: false,
    };
    this.todosArr = await this.todoService.addTodos(todo);
    console.log(this.todosArr);
  }
  updateToDoList(id: number) {
    this.todoService.updateTodo(id);
  }
}
