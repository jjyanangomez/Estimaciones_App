import { Customer } from "../models/customer";
import { Estimacion } from "../models/estimacion";
import { Personal } from "../models/personal";

export const estimacionData:Estimacion = {
    customer:{
        name:'ACME',
        requerimeinto:{
        tiempo:3,
        detalle:'Desarrollar una applicacion utilizando Angular para calcular el costo total de un proyecto',
    },
    direccion:{
        city :'Quito',
        principalStreet :'Av. Gracia Moreno',
        secondaryStreet:'Av. Vicente Maldonado',
        code:'N5-07'
    }

    },
 
    costosAdicionales:[
        {
            nombre:'Internet',
            valor :135,
           
        },
        {
            nombre:'Oficina',
            valor :1350,
           
        },
        {
            nombre:'Equipos',
            valor :1200,
           
        }
    ],
    precioVenta:21252.45,
    utilidad:6800.79,
    costoTotal:14451.67,
    roles:[
        {
            rol:'Gerente',
            salario:600,
            cantidad:1,
            porcentaje:20,
            sueldoRecibir:468.13
        },
        {
            rol:'Lider',
            salario:2340.69,
            cantidad:1,
            porcentaje:100,
            sueldoRecibir:2340.69
        },
        {
            rol:'Desarrolladores',
            salario:500,
            cantidad:4,
            porcentaje:100,
            sueldoRecibir:7880.16
        },
        {
            rol:'Tester',
            salario:500,
            cantidad:1,
            porcentaje:25,
            sueldoRecibir:492.51
        },
        {
            rol:'Infraestructura',
            salario:600,
            cantidad:1,
            porcentaje:25,
            sueldoRecibir:585.17
        },
   
    ]

}
