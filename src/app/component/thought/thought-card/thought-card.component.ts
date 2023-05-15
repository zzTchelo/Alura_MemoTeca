import { Component, Input } from '@angular/core';
import { thought } from '../thought';

@Component({
  selector: 'app-thought-card',
  templateUrl: './thought-card.component.html',
  styleUrls: ['./thought-card.component.css']
})
export class ThoughtCardComponent {

  @Input() thought: thought = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  widthThought(): string{
    if(this.thought.conteudo.length > 255){
      return 'pensamento-g'
    }

    return 'pensamento-p';
  }
}
