import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  isScrolled = signal(false);
  isMenuOpen = signal(false);

  navLinks = [
    { label: 'Sobre mi', anchor: '#about', icon: '<i class="bi bi-person-lines-fill"></i>' },
    { label: 'Skills', anchor: '#skills', icon: '<i class="bi bi-code-slash"></i>' },
    { label: 'Experiencia', anchor: '#experiencia', icon: '<i class="bi bi-briefcase"></i>' },
    { label: 'Aprendizaje', anchor: '#aprendizaje', icon: '<i class="bi bi-mortarboard"></i>' },
    { label: 'Contacto', anchor: '#contacto', icon: '<i class="bi bi-envelope"></i>' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 60);
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  scrollTo(anchor: string) {
    this.closeMenu();
    const el = document.querySelector(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
