import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss'],
})
export class CompletatiComponent implements OnInit {
  constructor(private todoService: TodosService) {}
  todosArr: Todo[] = [];

  onLoad: boolean = false;
  async ngOnInit(): Promise<void> {
    this.todosArr = await this.todoService.getTodos();
    this.onLoad = true;
  }
}
