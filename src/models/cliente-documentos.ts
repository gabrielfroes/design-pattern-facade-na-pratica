import { Cliente } from "../models/cliente.ts";

export class ClienteDocumentos {
  constructor(private cliente: Cliente) {}

  delete(): boolean {
    console.log(
      "Documentos de " + this.cliente.nome + " deletados com sucesso!",
    );
    return true;
  }
}
