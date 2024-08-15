import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TasksService } from './task.service';

interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, CreateTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  name = input.required<string>();
  @Input({ required: true }) userId!: string;

  createNewTask = false;

  constructor(private taskService: TasksService) {}

  get selectedUserTask() {
    return this.taskService.getUserTasks(this.userId);
  }

  onAddTask() {
    this.createNewTask = true;
  }

  onCloseDialog() {
    this.createNewTask = false;
  }
  onAddNewTask(task: Task) {
    this.taskService.addTask(task);
    this.createNewTask = false;
  }
}
