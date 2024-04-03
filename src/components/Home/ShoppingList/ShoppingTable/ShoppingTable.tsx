import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Compra } from "app/models";

interface Props {
  compras: Compra[];
}

export function ShoppingTable({ compras }: Props) {
  return (
    <TableContainer className="overflow-y-scroll max-h-96" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Listado de Compras">
        <TableHead>
          <TableRow>
            <TableCell>Descripción</TableCell>
            <TableCell align="right">ID Compra</TableCell>
            <TableCell align="right">Monto</TableCell>
            <TableCell align="right">Fecha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {compras?.map((compra) => (
            <TableRow
              key={compra?.idCompra}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {compra?.descripcion}
              </TableCell>
              <TableCell align="right">{compra?.idCompra}</TableCell>
              <TableCell align="right">$ {compra?.monto.toFixed(2)}</TableCell>
              <TableCell align="right">{compra?.fecha}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
