import { Situacao } from "../enums/situacao";
import { Atributo } from "./atributo";
import { FluxoSituacao } from "./fluxo-situacao";

export class Solicitacao {
  cdsolicitacao?:string;
  atributos?: Atributo[];
  situacao?: FluxoSituacao [];

}
