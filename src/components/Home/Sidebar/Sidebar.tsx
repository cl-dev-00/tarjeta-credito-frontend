'use client'

import { useEffect, useState } from "react";
import { ButtonsSidebar } from "./ButtonsSidebar";
import { CreditCard } from "./CreditCard";
import { DetailCreditCard } from "./DetailCredictCard";

import styles from './Sidebar.module.css';
import { getTarjetaDetalle } from "app/services";
import { Tarjeta } from "app/models";

export function Sidebar() {

  const [tarjeta, setTarjeta] = useState<Tarjeta | null | undefined>();

  useEffect(() => {
    getTarjetaDetalle()
    .then((response) => {
      setTarjeta(response.data);
    })
    .catch((error) => {
      alert('Ha ocurrido un error al intentar obtener la información de la tarjeta');
      console.log(error);
    });
  }, []);

  return (
    <section className={`max-md:p-5 md:p-10 max-w-full min-h-screen bg-gray-800 ${styles.container_sidebar}`}>
        <CreditCard tarjeta={tarjeta} />
        <DetailCreditCard tarjeta={tarjeta} />
        <ButtonsSidebar />
      </section>
  );
}
