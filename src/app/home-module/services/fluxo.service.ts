import { Injectable } from '@angular/core';
import { Situacao } from '../enums/situacao';
import { FluxoSituacao } from '../models/fluxo-situacao';
import { Solicitacao } from '../models/solicitacao';

@Injectable({
  providedIn: 'root'
})
export class FluxoService {
  solicitacao: Solicitacao = new Solicitacao();
  constructor() { }


  CarregandoFluxo() {
    const f1: FluxoSituacao = new FluxoSituacao();
    f1.situacao = Situacao.PROPRIEDADE_RESERVATORIO;
    f1.situacaoAnterior = Situacao.NULO
    f1.situacaoSucessor = Situacao.PROPRIEDADE_PVT;

    const f2: FluxoSituacao = new FluxoSituacao();
    f1.situacao = Situacao.PROPRIEDADE_PVT;
    f1.situacaoAnterior = Situacao.PROPRIEDADE_RESERVATORIO
    f1.situacaoSucessor = Situacao.HISTORICO_PRODUCAO_TANQUE;

    const f3: FluxoSituacao = new FluxoSituacao();
    f1.situacao = Situacao.HISTORICO_PRODUCAO_TANQUE;
    f1.situacaoAnterior = Situacao.PROPRIEDADE_PVT
    f1.situacaoSucessor = Situacao.FINALIZACAO;

    const f4: FluxoSituacao = new FluxoSituacao();
    f1.situacao = Situacao.FINALIZACAO;
    f1.situacaoAnterior = Situacao.HISTORICO_PRODUCAO_TANQUE
    f1.situacaoSucessor = Situacao.NULO;

    this.solicitacao.situacao?.push(f1)
    this.solicitacao.situacao?.push(f2);
    this.solicitacao.situacao?.push(f3);
    this.solicitacao.situacao?.push(f4);

  }

  getSolicitacao() {
    return this.solicitacao;
  }
}
