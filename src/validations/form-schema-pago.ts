import { z } from 'zod'

export const formSchemaPago = z.object({
    monto: z.string().min(1, {
        message: 'El monto es requerido'
    }).max(8, {
        message: 'El monto no debe de sobrepasar los 8 digitos'
    }),

})
