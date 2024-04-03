import { Compra } from "./Compra.model";

export interface ListadoCompras {
    mesActual: number;
    mesAnterior: number;
    montoTotalMesActual: number;
    montoTotalMesAnterior: number;
    compras: Compra[];
}