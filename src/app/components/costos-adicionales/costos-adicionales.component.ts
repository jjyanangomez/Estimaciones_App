import { Component, Input } from '@angular/core';
import { Estimacion } from '../../models/estimacion';

@Component({
  selector: 'costos-adicionales',
  standalone: true,
  imports: [],
  templateUrl: './costos-adicionales.component.html',
})
export class CostosAdicionalesComponent {
  @Input()estimacion!:Estimacion;
}
