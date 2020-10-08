import { Cliente } from "./models/cliente.ts";
import { Facade } from "./facade/cliente-facade.ts";

const gabriel = new Cliente(
  "Gabriel Froes",
  "gabrielfroes",
  "gabriel@codigofonte.com.br",
);

const vanessa = new Cliente(
  "Vanessa Froes",
  "vanessawfroes",
  "vanessa@codigofonte.com.br",
);

Facade.ClienteFacade.removeConta(gabriel);
Facade.ClienteFacade.removeConta(vanessa);
