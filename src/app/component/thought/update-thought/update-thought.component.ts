import { Component } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-thought',
  templateUrl: './update-thought.component.html',
  styleUrls: ['./update-thought.component.css']
})
export class UpdateThoughtComponent {

  form !: FormGroup

  constructor(
    private service : ThoughtService,
    private router : Router,
    private route : ActivatedRoute,
    private formBuilder : FormBuilder
  ){ }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.searchByID(parseInt(id!)).subscribe((thought) => {
      this.form = this.formBuilder.group({
        id: [thought.id],
        conteudo: [thought.conteudo, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        autoria: [thought.autoria, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        modelo: [thought.modelo],
        favorito: [thought.favorito]
      })
    })
  }
  UpdateThought(){
    this.service.thoughtUpdate(this.form.value).subscribe(() => {
      this.router.navigate(['/ListaPensamentos'])
    })
  }

  cancelThought(){
    this.router.navigate(['/ListaPensamentos'])
  }

  enableButton(): string {
    if(this.form.valid) {
      return "botao"
    } else {
      return "botao__desabilitado"
    }
  }

}
