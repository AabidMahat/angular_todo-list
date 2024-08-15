import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
  signal,
} from '@angular/core';
import { CardComponent } from '../shared/card/card.component';

// ? Approach 1
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

// ? Approach 2

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Output() select = new EventEmitter();

  // avatar = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>();

  user = input.required<User>();
  imagePath = computed(() => `assets/users/${this.user().avatar}`);
  select = output<string>();
  selected = input.required<boolean>();
  // get imagePath() {
  //   return `assets/users/${this.avatar()}`;
  // }

  onSelectUser(id: string) {
    this.select.emit(id);
  }
}
