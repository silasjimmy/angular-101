import { Component } from '@angular/core';
import { ToDoListItemComponent } from '../to-do-list-item/to-do-list-item.component';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [ToDoListItemComponent],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css',
})
export class ToDoListComponent {
  tasks = [
    {
      id: 1,
      title: 'read a book',
      isComplete: false,
    },
    {
      id: 2,
      title: 'wash utensils',
      isComplete: true,
    },
  ];
}
