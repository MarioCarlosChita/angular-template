import { Situacao } from "../enums/situacao";

export class Atributo {
  noAtributo: string;
  valor: string;
  agrupador: Situacao;

  constructor(noAtributo: string, valor: string, agrupador: Situacao) {
    this.agrupador = agrupador;
    this.noAtributo = noAtributo;
    this.valor = valor;
  }
}
