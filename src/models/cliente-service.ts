import { Cliente } from "../models/cliente.ts";

export class ClienteService {
  constructor(private cliente: Cliente) { }

  delete(): boolean {
    console.log(this.cliente.nome + " removido do banco de dados com sucesso!");
    return true;
  }
}
