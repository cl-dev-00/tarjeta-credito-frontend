import { Button } from "@mui/material";
import Link from "next/link";
import { FaDollarSign, FaCartShopping } from "react-icons/fa6";

export function ButtonsSidebar() {
  return (
    <div className="p-3 mt-5">
      <Link href="/pago">
        <div className="flex">
          <Button
            className="grow"
            variant="contained"
            color="primary"
            endIcon={<FaDollarSign size={18} />}
          >
            Pagar
          </Button>
        </div>
      </Link>
      <Link href="/compra">
        <div className="mt-4 flex">
          <Button
            className="grow"
            variant="contained"
            color="success"
            endIcon={<FaCartShopping size={18} />}
          >
            Comprar
          </Button>
        </div>
      </Link>
    </div>
  );
}
