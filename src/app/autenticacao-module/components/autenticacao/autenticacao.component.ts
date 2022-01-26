import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogoService } from 'src/app/share/services/dialogo.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.css']
})
export class AutenticacaoComponent implements OnInit {

  oForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dialogoservico: DialogoService
  ) {
    this.oForm = this.fb.group({
      senha: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }


  onSubmit() {
    if (this.oForm.valid) {
      const senha: string = this.oForm.get('senha')?.value;
      let messagem: string = "";
      if (senha === environment.SISTEMA_SENHA) {
        messagem = "Autenticado com Sucesso!";
        this.dialogoservico.Sucesso(messagem);
        this.carregandoPagina();
      } else {
        messagem = "Erro de Autenticação";
        this.dialogoservico.ErroComfirmacao(messagem);
      }
    }
  }

  private carregandoPagina() {
    setTimeout(() => {
      this.dialogoservico.closeDialogo();
      this.onNextPage();
    }, 1000);
  }

  onNextPage() {
    this.router.navigateByUrl('/home');
  }
}
