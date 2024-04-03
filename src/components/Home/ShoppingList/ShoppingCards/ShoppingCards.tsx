interface Props {
  mesActual: number;
  mesAnterior: number;
  montoTotalMesActual: number;
  montoTotalMesAnterior: number;
  totalCompras: number;
}

export function ShoppingCards({
  mesActual,
  mesAnterior,
  montoTotalMesActual,
  montoTotalMesAnterior,
  totalCompras,
}: Props) {
  const meses: string[] = [
    "Ninguo",
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  return (
    <div className="flex gap-10 my-5">
      <div className="flex justify-center">
        <a
          href="#"
          className="block max-w-sm p-6 border rounded-lg shadow bg-gray-800 border-gray-700"
        >
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 text-white">
            {totalCompras}
          </h5>
          <p className="font-normal text-gray-400">
            Número de Compras
          </p>
        </a>
      </div>

      <div className="flex justify-center">
        <a
          href="#"
          className="block max-w-sm p-6 bg-blue-700 border border-blue-600 rounded-lg shadow"
        >
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 text-white">
            $ {montoTotalMesAnterior.toFixed(2)}
          </h5>
          <p className="font-normal text-gray-300">
            Compras realizadas en {meses[mesAnterior]}
          </p>
        </a>
      </div>

      <div className="flex justify-center">
        <a
          href="#"
          className="block max-w-sm p-6 bg-green-700 border border-green-600 rounded-lg shadow"
        >
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 text-white">
            $ {montoTotalMesActual.toFixed(2)}
          </h5>
          <p className="font-normal text-gray-300">
            Compras realizadas en {meses[mesActual]}
          </p>
        </a>
      </div>
    </div>
  );
}
