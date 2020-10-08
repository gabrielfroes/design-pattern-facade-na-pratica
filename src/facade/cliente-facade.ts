import { Cliente } from "../models/cliente.ts";
import { ClienteAvatar } from "../models/cliente-avatar.ts";
import { ClienteDocumentos } from "../models/cliente-documentos.ts";
import { ClienteEmail } from "../models/cliente-email.ts";
import { ClienteHistoricoAcesso } from "../models/cliente-historico-acesso.ts";
import { ClienteService } from "../models/cliente-service.ts";

export module Facade {
  export class ClienteFacade {
    static removeConta(cliente: Cliente) {
      const clienteAvatar = new ClienteAvatar(cliente);
      const clienteDocumentos = new ClienteDocumentos(cliente);
      const clienteHistoricoAcesso = new ClienteHistoricoAcesso(cliente);
      const clienteService = new ClienteService(cliente);
      const clienteEmail = new ClienteEmail(cliente);

      clienteAvatar.remove();
      clienteDocumentos.delete();
      clienteHistoricoAcesso.remove();
      clienteService.delete();
      clienteEmail.envioRemocaoConta();
    }
  }
}
