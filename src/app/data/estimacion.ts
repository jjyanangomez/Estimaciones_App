import { Customer } from "../models/customer";
import { Estimacion } from "../models/estimacion";

export const estimacionData:Estimacion = {
    customer:{
        name:'Juan',
    requerimeinto:{
        
        tiempo:3,
        detalle:'Desarrollar una app',
    },
    direccion:{
        city :'Loja',
        principalStreet :'Calle 1',
        secondaryStreet:'Calle 2',
        code:'23-56'
    }

    },
    costohora: 4.64,
    manoObra:2.63,
    costosAdicionales:[
        {
            nombre:'Computador',
            valor :45,
           
        }
    ],
    precioVenta:8.53,
    utilidad:10,
    costoTotal:52,
    roles:[
        {
            rol:'Gerente',
            salario:352.5,
            cantidad:4,
            porcentaje:15,
            sueldoRecibir:45
        }
    ]

}
