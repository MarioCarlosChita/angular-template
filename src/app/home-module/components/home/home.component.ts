import { Component, OnInit } from '@angular/core';
import { Situacao } from '../../enums/situacao';
import { FluxoSituacao } from '../../models/fluxo-situacao';
import { Solicitacao } from '../../models/solicitacao';
import { FluxoService } from '../../services/fluxo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  solicitacao: Solicitacao = new Solicitacao();
  SITUACAO :any ;
  constructor(private flx: FluxoService) {
    this.carregandoFluxo();
    //this.SITUACAO =this.solicitacao.situacao[0].situacao[];
  }

  ngOnInit(): void { }

  carregandoFluxo() {
     this.flx.CarregandoFluxo();
     this.solicitacao = this.flx.getSolicitacao();
  }


}
