import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-aprendizaje',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './aprendizaje.component.html',
  styleUrl: './aprendizaje.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AprendizajeComponent {

  public cursos = [
    {
      src: "./assets/img-aprendizaje/diplomado-web.png", alt: "diplomado",
      url: "https://www.credly.com/badges/7e554b14-73f1-42b7-914b-19adc10aca13/linked_in_profile"
    },
    {
      src: "./assets/img-aprendizaje/curso-angular-pro.jpg",alt: "angular",
      url: "https://www.udemy.com/certificate/UC-7eda49ac-c515-4c95-84b2-e08a4bbad939/"
    },
    {
      src: "./assets/img-aprendizaje/curso-angular.jpg",alt: "angular",
      url: "https://www.udemy.com/certificate/UC-9b657733-577d-4913-a452-f39c2b72da78/"
    },

    {
      src: "./assets/img-aprendizaje/curso-node.jpg", alt: "node",
      url: "https://www.udemy.com/certificate/UC-c8202d7d-bc43-4ea7-8330-b7449ea331ad/"
    },

    {
      src: "./assets/img-aprendizaje/curso-solid.jpg", alt: "solid",
      url: "https://www.udemy.com/certificate/UC-fcbb0ed5-0177-4450-a5cd-0a1756a61f09/"
    },

    {
      src: "./assets/img-aprendizaje/curso-ts.jpg", alt: "ts",
      url: "https://www.udemy.com/certificate/UC-4b2b242a-8820-4f11-a127-d467c3327620/"
    },

    {
      src: "./assets/img-aprendizaje/curso-vue.jpg", alt: "vue",
      url: "https://www.udemy.com/certificate/UC-985d702b-4ff6-4104-9472-566094afef07/"
    }

  ];

}
