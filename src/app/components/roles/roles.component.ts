import { Component, Input } from '@angular/core';
import { Personal } from '../../models/personal';

@Component({
  selector: 'roles',
  standalone: true,
  imports: [],
  templateUrl: './roles.component.html',
})
export class RolesComponent {
  @Input() roles!:Personal[];
}
