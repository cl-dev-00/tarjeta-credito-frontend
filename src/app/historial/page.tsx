"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Transaccion } from "app/models";
import { useEffect, useState } from "react";
import { getHistorialTarjeta } from "app/services";
import Link from "next/link";
import { Button } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa6";

export default function Home() {
  const [transacciones, setTransacciones] = useState<Transaccion[]>([]);

  useEffect(() => {
    getHistorialTarjeta()
      .then((response) => {
        setTransacciones(response.data);
      })
      .catch((error) => {
        alert(
          "Ha ocurrido un error al intentar obtener el historial de transacciones"
        );
        console.log(error);
      });
  }, []);

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold">Historial de Transacciones</h1>
      <TableContainer className="mt-10 overflow-y-scroll max-h-96 min-w-screen-lg max-w-screen-xl" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="Listado de Compras">
          <TableHead>
            <TableRow>
              <TableCell>ID Transacción</TableCell>
              <TableCell align="right">Descripción</TableCell>
              <TableCell align="right">Monto</TableCell>
              <TableCell align="right">Fecha</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transacciones?.map((transaccion) => (
              <TableRow
                key={transaccion?.idTransaccion}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th">
                  {transaccion?.idTransaccion}
                </TableCell>
                <TableCell align="right" scope="row">
                  {transaccion?.descripcion}
                </TableCell>
                <TableCell align="right">
                  $ {transaccion?.monto.toFixed(2)}
                </TableCell>
                <TableCell align="right">{transaccion?.fecha}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Link href='/'>
        <Button
          className="grow absolute -bottom-10 left-0"
          variant="contained"
          color="primary"
          startIcon={<FaArrowLeft size={20} />}
          >
          Regresar
        </Button>
      </Link>
    </main>
  );
}
