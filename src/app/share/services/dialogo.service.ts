import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class DialogoService {

  constructor() { }
  Sucesso(messagem: string) {
    return Swal.fire({
      title: messagem,
      position: 'center',
      icon: 'success'
    }).then((value) => {
      return true;
    })
  }

  Comfirmacao(messagem: string) {
    return this.DefaultMessagem(messagem).then((value) => {
      if (value.isConfirmed) {
        return true;
      }
      return false;
    });
  }

  ErroComfirmacao(messagem:string){
      return Swal.fire({
         title:messagem,
         icon:'error',
         showCancelButton: true,
         confirmButtonText: 'Sim',
      })
  }

  closeDialogo(){
      Swal.close();
  }


  private DefaultMessagem(messagem: string) {
    return Swal.fire({
      title: messagem,
      position: 'center',
      icon: 'warning',
      showCancelButton: true,
      color:'#50ac7c',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Nao, Cancelar',
      reverseButtons: true
    });
  }
}
