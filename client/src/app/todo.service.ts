import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, map, tap } from "rxjs";

export type TODO = { title: string, date: string, done: boolean, _id?: string };

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private url: string = "/api/todos/";

  page :string = "home";
  constructor(private http: HttpClient) {
    this.getTodos().subscribe((todos: TODO[]) => {
      this.todos.next(todos);
    })
  }

  todos: BehaviorSubject<TODO[]> = new BehaviorSubject<TODO[]>([]);
  getTodos() {
    return this.http.get<TODO[]>(this.url);
  }

  updateTodo(todo: TODO) {
    return this.http.put(this.url + todo._id, {})
      .pipe(
        tap((res: any) => {
          const todos_ = this.todos.value.map((todo_: TODO) => {
            if (todo_._id === todo._id)
              todo_.done = !todo_.done;
            return todo_;
          });
          this.todos.next(todos_);
        })
      );
  }

  deleteTodo(todo: TODO) {
    return this.http.delete(this.url + todo._id, {})
      .pipe(
        tap(
          (res: any) => {
            this.todos.next(this.todos.value.filter((todo_: TODO) => todo._id != todo_._id));
          }
        )
      )
  }

  postTodo( todo : TODO) {
    return this.http.post(this.url,todo).pipe(
      tap((res : any) => {
        let _id = res._id;
        todo._id = _id;
        this.todos.next([...this.todos.value,todo])
      })
    );
  } 

}
