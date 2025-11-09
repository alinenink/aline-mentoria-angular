import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  title = 'Minha primeira aplicação Angular';
  subtitle = 'Criando um component simples';

  changeTitle() {
    this.title = "Titulo Alterado! Otimo Trabalho!"
  }
}
