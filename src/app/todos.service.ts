import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoArr: Todo[] = [];

  constructor() {}

  async getTodos(): Promise<Todo[]> {
    await new Promise((x) => setTimeout(x, 2000));
    return this.todoArr;
  }

  async addTodos(todo: Todo): Promise<Todo[]> {
    console.log(this.todoArr);
    await new Promise((x) => setTimeout(x, 2000));
    this.todoArr.push(todo);
    return this.todoArr;
  }

  async removeTodos(todo: Todo): Promise<Todo[]> {
    await new Promise((x) => setTimeout(x, 2000));
    this.todoArr = this.todoArr.filter((y) => y !== todo);

    return this.todoArr;
  }
  async updateTodo(id: number): Promise<Todo[]> {
    let index = this.todoArr.findIndex((x) => x.id == id);
    await new Promise((x) => setTimeout(x, 2000));

    this.todoArr[index].completed = true;
    return this.todoArr;
  }
}

/*
  getTodos(): Promise<Todo[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...this.todoArr]);
      }, 2000);
    });
  }

  addTodos(newTodo: Todo): Promise<Todo[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.todoArr.push(newTodo);
        resolve([...this.todoArr]);
      }, 2000);
    });
  }

  removeTodos(todoId: number): Promise<Todo[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.todoArr = this.todoArr.filter((todo) => todo.id !== todoId);
        resolve([...this.todoArr]);
      }, 2000);
    });
  }

  updateTodo(updatedTodo: Todo): Promise<Todo[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = this.todoArr.findIndex(
          (todo) => todo.id === updatedTodo.id
        );
        if (index !== -1) {
          this.todoArr[index] = { ...this.todoArr[index], ...updatedTodo };
        }
        resolve([...this.todoArr]);
      }, 2000);
    });
  }
} */
