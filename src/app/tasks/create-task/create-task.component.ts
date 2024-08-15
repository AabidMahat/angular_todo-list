import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../task.service';

interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'create-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css',
})
export class CreateTaskComponent {
  enteredTitle = signal('');
  enterdSummary = signal('');
  enteredDate = signal('');
  @Input({ required: true }) userId!: string;
  newTask = signal<Task | null>(null);

  @Output() close = new EventEmitter<void>();

  onCancel() {
    this.close.emit();
  }

  constructor(private taskService: TasksService) {}

  addNewTask() {
    this.taskService.addTask({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: this.enteredTitle(),
      summary: this.enterdSummary(),
      dueDate: this.enteredDate(),
    });
    this.close.emit();
  }
}
