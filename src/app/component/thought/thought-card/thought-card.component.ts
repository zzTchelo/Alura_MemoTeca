import { Component, Input } from '@angular/core';
import { thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-thought-card',
  templateUrl: './thought-card.component.html',
  styleUrls: ['./thought-card.component.css']
})
export class ThoughtCardComponent {

  constructor(
    private service : ThoughtService
  ) { }

  @Input() thought: thought = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  }

  widthThought(): string{
    if(this.thought.conteudo.length > 255){
      return 'pensamento-g'
    }
    return 'pensamento-p';
  }

  changeFavoriteIcon(): string{
    if(this.thought.favorito == false){
      return 'inativo';
    }
    return 'ativo';
  }

  updateFavorite(): void{
    this.service.stateFavorite(this.thought).subscribe();
  }
}

