import { Component, Input } from '@angular/core';
import { TODO, TodoService } from '../todo.service';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  faXmark: any = faXmark;
  faCheck: any = faCheck;
  faCircleXmark: any = faCircleXmark;
  @Input() todo: TODO = { title: "", date: "", done: false, _id: "" }

  constructor(protected todoService: TodoService) {}

  toggle(todo: TODO) {
    console.log(todo);
    this.todoService.updateTodo(todo).subscribe();
  }

  del(todo: TODO) {
    this.todoService.deleteTodo(todo).subscribe();
  }
}
