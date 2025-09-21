import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio-menu',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, RouterModule],
  templateUrl: './portfolio-menu.component.html',
  styleUrls: ['./portfolio-menu.component.css'] 
})

export class PortfolioMenuComponent {
  nome = 'Ageu Oliveira';
  profissao = 'Desenvolvedor de Software Full Stack';
  telefone = '(88) 99808-4731';
  get whatsappLink() {
    // Remove tudo que não for número
    const numero = this.telefone.replace(/\D/g, '');
    return `https://wa.me/${numero}`;
  }
  email = 'ageuoliveira0@email.com';
  linkedin = 'https://www.linkedin.com/in/ageu-oliveira-39b55b203/';
  github = 'https://github.com/ageuss';
  foto = 'perfil.jpeg'; // coloque sua foto em assets
  
}
