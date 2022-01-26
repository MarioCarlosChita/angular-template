import { Situacao } from "../enums/situacao";

export class FluxoSituacao {
  situacao?:Situacao;
  situacaoAnterior?: Situacao;
  situacaoSucessor?: Situacao;
}
