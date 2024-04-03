import { Endpoints } from "app/endpoints";
import { CrearCompra, CrearPago, ListadoCompras, ResponseData, Tarjeta, Transaccion } from "app/models";

export async function getTarjetaDetalle(): Promise<ResponseData<Tarjeta>>
{
    const response = await fetch(process.env.NEXT_PUBLIC_URL_BACKEND  + Endpoints.tarjetaEndpoint + '/1/detalle', {
        method: 'GET',
    });

    const data = await response.json() as ResponseData<Tarjeta>;

    return data
}

export async function getListadoDeCompras(): Promise<ResponseData<ListadoCompras>>
{
    const response = await fetch(process.env.NEXT_PUBLIC_URL_BACKEND  + Endpoints.compraEndpoint + '/1', {
        method: 'GET',
    });

    const data = await response.json() as ResponseData<ListadoCompras>;

    return data
}

export async function getHistorialTarjeta(): Promise<ResponseData<Transaccion[]>>
{
    const response = await fetch(process.env.NEXT_PUBLIC_URL_BACKEND  + Endpoints.tarjetaEndpoint + '/1/historial', {
        method: 'GET',
    });

    const data = await response.json() as ResponseData<Transaccion[]>;

    return data
}

export async function agregarCompra(compraNueva: CrearCompra): Promise<void>
{
    const response = await fetch(process.env.NEXT_PUBLIC_URL_BACKEND  + Endpoints.compraEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(compraNueva)
    });

    const data = await response.json() as ResponseData<any>;

    console.log(data);

}

export async function agregarPago(pagoNuevo: CrearPago): Promise<void>
{
    const response = await fetch(process.env.NEXT_PUBLIC_URL_BACKEND  + Endpoints.pagoEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pagoNuevo)
    });

    const data = await response.json() as ResponseData<any>;

    console.log(data);

}