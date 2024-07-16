import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list-item',
  standalone: true,
  imports: [],
  templateUrl: './to-do-list-item.component.html',
  styleUrl: './to-do-list-item.component.css',
})
export class ToDoListItemComponent {
  taskTitle = 'Read my book';
  isComplete = false;

  completeTask() {
    this.isComplete = true;
  }

  updateTitle(title: string) {
    this.taskTitle = title;
  }
}
