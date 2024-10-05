import { Injectable } from '@angular/core';
import { Estimacion } from '../models/estimacion';
import { estimacionData } from '../data/estimacion';

@Injectable({
  providedIn: 'root'
})
export class EstimacionService {
  private estimacion:Estimacion=estimacionData
  constructor() { }

  getEstimacion():Estimacion{
    return this.estimacion;
  }
}
