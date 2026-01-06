import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  title = 'Minha primeira aplicação Angular';
  subtitle = 'Criando um component simples';

  items = [
    { name: 'Angular', category: 'Framework' },
    { name: 'React', category: 'Framework' },
    { name: 'Vue', category: 'Framework' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'TypeScript', category: 'Language' },
  ];

  filteredItems = [...this.items];

  categories = ['Framework', 'Language'];

  form!: FormGroup; 
  

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      category: ['all'],
    });
  }

  changeTitle() {
    this.title = 'Título alterado! Ótimo trabalho!';
  }

  applyFilter() {
    const name = this.form.get('name')?.value ?? '';
    const category = this.form.get('category')?.value ?? 'all';

    let result = this.items;

    if (name) {
      result = result.filter(item =>
        item.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (category !== 'all') {
      result = result.filter(item =>
        item.category === category
      );
    }

    this.filteredItems = result;
  }
}