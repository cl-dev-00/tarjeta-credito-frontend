import { Tarjeta } from "app/models";
import { FaAsterisk } from "react-icons/fa6";

interface Props {
  tarjeta: Tarjeta | null | undefined;
}

export function CreditCard({tarjeta} : Props) {

  const obtenerNumeroTarjetaCredito = (numeroTarjeta: string  | undefined, posicionReversa: number): number => {
    if(numeroTarjeta === '' || numeroTarjeta === null || numeroTarjeta === undefined) {
      return 0;
    }

    const numero: string = numeroTarjeta.charAt((numeroTarjeta.length) + posicionReversa);

    return parseInt(numero);
  }
  
  return (
    <div className="max-w-md mx-auto bg-blue-500 rounded-lg overflow-hidden md:max-w-sm">
      <div className="md:flex">
        <div className="w-full p-4">
          <div className="flex justify-between items-center text-white">
            <span className="text-3xl font-bold">
              $ {tarjeta?.saldoDisponible.toFixed(2) ?? '0.00'} <small className="text-sm font-light">USD</small>
            </span>
            <i className="fa fa-chevron-circle-up fa-2x text-gray-300"></i>
          </div>

          <div className="flex justify-between items-center mt-10">
            <div className="flex flex-row">
              <FaAsterisk />
              <FaAsterisk />
              <FaAsterisk />
              <FaAsterisk />
            </div>

            <div className="flex flex-row">
              <FaAsterisk />
              <FaAsterisk />
              <FaAsterisk />
              <FaAsterisk />
            </div>

            <div className="flex flex-row">
              <FaAsterisk />
              <FaAsterisk />
              <FaAsterisk />
              <FaAsterisk />
            </div>

            <div className="flex flex-row">
              <span className="text-white text-lg mr-1 font-bold">{obtenerNumeroTarjetaCredito(tarjeta?.numeroTarjeta, -4)}</span>
              <span className="text-white text-lg mr-1 font-bold">{obtenerNumeroTarjetaCredito(tarjeta?.numeroTarjeta, -3)}</span>
              <span className="text-white text-lg mr-1 font-bold">{obtenerNumeroTarjetaCredito(tarjeta?.numeroTarjeta, -2)}</span>
              <span className="text-white text-lg mr-1 font-bold">{obtenerNumeroTarjetaCredito(tarjeta?.numeroTarjeta, -1)}</span>
            </div>
          </div>

          <div className="mt-8 flex justify-between items-center text-white">
            <div className="flex flex-col">
              <span className="font-bold text-gray-300 text-sm">Family</span>
              <span className="font-bold">{tarjeta?.nombreTitular}</span>
            </div>

            {/* <div className="flex flex-col">
              <span className="font-bold text-gray-300 text-sm">Expires</span>
              <span className="font-bold">01/21</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
