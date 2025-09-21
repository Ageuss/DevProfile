import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { PortfolioMenuComponent } from './portfolio-menu/portfolio-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PortfolioMenuComponent, NgIf, NgTemplateOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nome = 'Ageu Oliveira';
  profissao = 'Desenvolvedor de Software Full Stack';
  telefone = '(88) 99808-4731';
  email = 'ageuoliveira0@email.com';
  linkedin = 'https://www.linkedin.com/in/ageu-oliveira-39b55b203/';
  github = 'https://github.com/ageuss';
  foto = 'perfil.jpeg';
  get whatsappLink() {
    const numero = this.telefone.replace(/\D/g, '');
    return `https://wa.me/${numero}`;
  }
  constructor(public router: Router) {}
}
