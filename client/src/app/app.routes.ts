import { Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { NewComponent } from './new/new.component';

export const routes: Routes = [
    {path: "", redirectTo:"/todos", pathMatch:'full'},
    {path: "todos", component: TodosComponent},
    {path: "new", component: NewComponent},
    {path: "**", redirectTo:"/todos",pathMatch:'full'}
];
