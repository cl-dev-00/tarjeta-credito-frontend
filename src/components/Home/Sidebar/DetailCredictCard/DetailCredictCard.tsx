import { Tarjeta } from "app/models";

interface Props {
  tarjeta: Tarjeta | null | undefined;
}


export function DetailCreditCard({tarjeta} : Props) {
  return (
    <div className="flow-root mt-5">
      <ul className="max-w-md divide-y-4 divide-y-reverse  divide-gray-200 dark:divide-gray-500">
        <li className="py-3 sm:py-4">
          <div className="flex items-center flex-wrap">
            <div className="flex-1 min-w-0 ms-4">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Saldo Actual
              </p>
            </div>
            <div className="inline-flex items-center  text-base font-semibold text-gray-900 dark:text-white">
              $ {tarjeta?.saldoActual.toFixed(2) ?? '0.00'}
            </div>
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center flex-wrap">
            <div className="flex-1 min-w-0 ms-4">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Limite de Crédito
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              $ {tarjeta?.limiteCredito.toFixed(2) ?? '0.00'}
            </div>
          </div>
        </li>
      </ul>
      <ul className="mt-10">
        <li className="py-3 sm:py-4 divide-y divide-gray-200 dark:divide-gray-700">
          <div className="flex items-center flex-wrap">
            <div className="flex-1 min-w-0 ms-4">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Interés Bonificable
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              $ {tarjeta?.interesBonificable.toFixed(2) ?? '0.00'}
            </div>
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center flex-wrap">
            <div className="flex-1 min-w-0 ms-4">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Cuota mínima a pagar
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              $ {tarjeta?.cuotaMinima.toFixed(2) ?? '0.00'}
            </div>
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center flex-wrap">
            <div className="flex-1 min-w-0 ms-4">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Monto Total a Pagar
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              $ {tarjeta?.montoTotalAPagar.toFixed(2) ?? '0.00'}
            </div>
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center flex-wrap">
            <div className="flex-1 min-w-0 ms-4">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Pago de Contado con Intereses
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              $ {tarjeta?.montoTotalContadoConInteres.toFixed(2) ?? '0.00'}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
