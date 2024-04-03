"use client";

import { useEffect, useState } from "react";

import { ShoppingCards } from "./ShoppingCards";
import { ShoppingTable } from "./ShoppingTable";
import { getListadoDeCompras } from "app/services";
import { ListadoCompras } from "app/models";
import { Button } from "@mui/material";
import { FaMagnifyingGlassDollar } from "react-icons/fa6";
import Link from "next/link";

export function ShoppingList() {
  const [informacionDeCompras, setInformacionDeCompras] = useState<
    ListadoCompras | null | undefined
  >(null);

  useEffect(() => {
    getListadoDeCompras()
      .then((response) => {
        setInformacionDeCompras(response.data);
      })
      .catch((error) => {
        alert(
          "Ha ocurrido un error al intentar obtener la información de las compras"
        );
        console.log(error);
      });
  }, []);

  return (
    <div className="grow max-md:p-5 md:p-14">
      <ShoppingCards
        mesActual={informacionDeCompras?.mesActual ?? 0}
        mesAnterior={informacionDeCompras?.mesAnterior ?? 0}
        montoTotalMesActual={informacionDeCompras?.montoTotalMesActual ?? 0}
        montoTotalMesAnterior={informacionDeCompras?.montoTotalMesAnterior ?? 0}
        totalCompras={informacionDeCompras?.compras.length ?? 0}
      />
      <ShoppingTable compras={informacionDeCompras?.compras ?? []} />

      <Link href='/historial'>
        <Button
          className="grow absolute -bottom-10 left-0"
          variant="contained"
          color="primary"
          endIcon={<FaMagnifyingGlassDollar size={20} />}
          >
          Historial de Transacciones
        </Button>
      </Link>
    </div>
  );
}
