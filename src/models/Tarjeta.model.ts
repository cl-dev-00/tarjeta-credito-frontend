export interface Tarjeta {
    idTarjeta:                   number;
    nombreTitular:               string;
    numeroTarjeta:               string;
    limiteCredito:               number;
    saldoDisponible:             number;
    saldoActual:                 number;
    interesBonificable:          number;
    cuotaMinima:                 number;
    montoTotalAPagar:            number;
    montoTotalContadoConInteres: number;
}