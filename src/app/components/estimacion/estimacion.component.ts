import { Component, OnInit } from '@angular/core';
import { RolesComponent } from "../roles/roles.component";
import { CostosAdicionalesComponent } from "../costos-adicionales/costos-adicionales.component";
import { NominaMensualComponent } from "../nomina-mensual/nomina-mensual.component";
import { EstimacionService } from '../../services/estimacion.service';
import { Estimacion } from '../../models/estimacion';
import { CustomerViewComponent } from '../customer-view/customer-view.component';

@Component({
  selector: 'estimacion',
  standalone: true,
  imports: [RolesComponent, CostosAdicionalesComponent, NominaMensualComponent, CustomerViewComponent],
  templateUrl: './estimacion.component.html',
})
export class EstimacionComponent implements OnInit {
  estimacion!:Estimacion;
  constructor(private service:EstimacionService) { }
  ngOnInit(): void {
    this.estimacion=this.service.getEstimacion();
  }
}
