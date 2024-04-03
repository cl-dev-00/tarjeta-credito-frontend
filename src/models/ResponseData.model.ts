export interface ResponseData<T> {
    estado:   boolean;
    data:     T;
    mensajes: Mensaje[];
}

export interface Mensaje {
    codigo:      number;
    descripcion: string;
}
