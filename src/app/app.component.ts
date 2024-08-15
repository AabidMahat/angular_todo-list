import { Component, output, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-user';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor } from '@angular/common';

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  user = DUMMY_USERS;
  name = signal<string>('');
  selectedUser = signal<User | null>(null);
  selectedUserId = signal<string>('');

  onSelectedUser(id: string) {
    this.selectedUserId.set(id);
    const user = this.user.find((u) => u.id === id);
    this.selectedUser.set(user || null);
    if (user) {
      this.name.set(user.name);
    }
  }
}
