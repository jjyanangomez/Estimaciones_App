import { Component, Input } from '@angular/core';
import { Personal } from '../../models/personal';

@Component({
  selector: 'nomina-mensual',
  standalone: true,
  imports: [],
  templateUrl: './nomina-mensual.component.html',
})
export class NominaMensualComponent {
  @Input() nomina!:Personal


}
