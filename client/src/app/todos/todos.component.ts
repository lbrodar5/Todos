import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  constructor(protected todoService : TodoService) {}

}
