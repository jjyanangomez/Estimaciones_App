import { Customer } from "./customer";
import { Personal } from "./personal";
import { Recursos } from "./recursos";

export class Estimacion {
    customer!:Customer
    roles!:Personal[]
    costosAdicionales!:Recursos[];
    costohora!: number;
    manoObra!:number;
  
    costoTotal!:number;
    precioVenta!:number;
    utilidad!:number;
   
    
}
