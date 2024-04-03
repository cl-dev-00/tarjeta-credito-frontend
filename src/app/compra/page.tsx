"use client";

import { CrearCompra, Transaccion } from "app/models";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";
import { FaArrowLeft, FaCartShopping } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { formSchemaCompra } from "app/validations";
import { agregarCompra } from "app/services";
import { useRouter } from "next/navigation";
import dayjs from 'dayjs';

import 'react-datepicker/dist/react-datepicker.css';
import './CompraPage.module.css';

type Inputs = {
  descripcion: string;
  monto: string;
  fecha: Date;
};

export default function Home() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const router = useRouter();

  const form = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(formSchemaCompra),
  });

  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    try {

      const compra: CrearCompra = {
        idTarjeta: 1,
        idCliente: 1,
        nombreCliente: "Fernando Torres",
        descripcion: values.descripcion,
        monto: parseFloat(values.monto),
        fecha: dayjs(startDate).format('YYYY-MM-DD'),
      };

      await agregarCompra(compra);

      router.push('/');
    } catch (error) {
      alert("Ocurrio un error al intentar agregar el nuevo producto");
    }
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        ref={form}
        className="flex flex-col bg-white p-10 rounded-xl min-w-96 items-center px-10 py-20"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-5">Agregar Compra</h2>

        <div className="mt-5 min-w">
          <FormControl sx={{ minWidth: 250 }}>
            <InputLabel htmlFor="my-input">Descripcion</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              {...register("descripcion")}
            />
            <FormHelperText id="my-helper-text">
              Ingresa la descripción de la compra.
            </FormHelperText>
            {errors.descripcion?.message && (
              <FormHelperText>
                <span className="text-red-600">
                  {errors.descripcion?.message}
                </span>
              </FormHelperText>
            )}
          </FormControl>
        </div>

        <div className="mt-5">
          <FormControl sx={{ minWidth: 250 }}>
            <InputLabel htmlFor="my-input">Monto</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              {...register("monto")}
            />
            <FormHelperText id="my-helper-text">
              Ingresa el monto de la compra.
            </FormHelperText>
            {errors.monto?.message && (
              <FormHelperText className={`text-red-600`}>
                <span className="text-red-600">{errors.monto?.message}</span>
              </FormHelperText>
            )}
          </FormControl>
        </div>

        <div className="mt-5">
          <FormControl className="flex items-center" sx={{ minWidth: 250 }}>
            <DatePicker
              className="flex justify-center"
              selected={startDate}
              {...register("fecha")}
              onChange={(date: Date) => setStartDate(date)}
            />
            <FormHelperText id="my-helper-text">
              Ingresa la fecha de la compra.
            </FormHelperText>
            {errors.fecha?.message && (
              <FormHelperText className={`text-red-600`}>
                <span className="text-red-600">{errors.fecha?.message}</span>
              </FormHelperText>
            )}
          </FormControl>
        </div>

        <div className="flex justify-around mt-5 min-w-64">
          <Link href="/">
            <Button
              className=""
              variant="contained"
              color="error"
              startIcon={<FaArrowLeft size={20} />}
            >
              Cancelar
            </Button>
          </Link>
          <Button
            type="submit"
            className=""
            variant="contained"
            color="success"
            startIcon={<FaCartShopping size={20} />}
          >
            Agregar
          </Button>
        </div>
      </form>
    </main>
  );
}
