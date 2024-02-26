import { Component, OnInit } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { faCheckDouble, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { TodoService } from '../todo.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FontAwesomeModule, NgbCollapseModule, RouterModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  faCheckDouble: any = faCheckDouble;
  faUser : any = faUser;
  isMenuCollapsed: boolean = true;

  constructor(protected todoService: TodoService, protected userService : UserService){}

  ngOnInit(): void {
    this.userService.login().subscribe();
  }


  onGoToHome(){
    this.todoService.page = 'home';
  }
  onGoToNew() {
    this.todoService.page = 'new';
  }
}
