import { z } from 'zod'

export const formSchemaCompra = z.object({
    descripcion: z.string().min(3, {
        message: 'La descripción debe ser mayor a 3 caracteres'
    }).max(255, {
        message: 'La descripción debe tener como maximo 255 caracteres'
    }),

    monto: z.string().min(1, {
        message: 'El monto es requerido'
    }).max(8, {
        message: 'El monto no debe de sobrepasar los 8 digitos'
    }),

})
