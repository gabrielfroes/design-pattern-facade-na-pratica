import { Cliente } from "../models/cliente.ts";

export class ClienteAvatar {
  constructor(private cliente: Cliente) {}

  remove(): boolean {
    console.log("Avatar de " + this.cliente.nome + " removido com sucesso!");
    return true;
  }
}
