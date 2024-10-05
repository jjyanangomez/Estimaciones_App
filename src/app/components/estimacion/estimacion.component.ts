import { Component } from '@angular/core';
import { RolesComponent } from "../roles/roles.component";
import { CostosAdicionalesComponent } from "../costos-adicionales/costos-adicionales.component";
import { NominaMensualComponent } from "../nomina-mensual/nomina-mensual.component";
import { Estimacion } from '../../models/estimacion';

@Component({
  selector: 'estimacion',
  standalone: true,
  imports: [RolesComponent, CostosAdicionalesComponent, NominaMensualComponent],
  templateUrl: './estimacion.component.html',
})
export class EstimacionComponent {
  estimacion!:Estimacion
}
