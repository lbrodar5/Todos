import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TODO, TodoService } from '../todo.service';


@Component({
  selector: 'app-new',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {

  constructor(protected todoService : TodoService, private router : Router){}
  
  onSublit( form : NgForm) {
    let todo : TODO = form.value
    if (todo.done !== true) {
      todo.done = false;
    }
    this.todoService.postTodo(todo).subscribe();
    this.todoService.page = 'home';
    this.router.navigate(["/home"]);
  }

  goHome(){
    this.todoService.page = 'home';
    this.router.navigate(["/home"]);
  }
}
