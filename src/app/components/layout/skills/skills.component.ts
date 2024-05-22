import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {

  public images = [
    { src: "./assets/img-skills/angular.webp", alt: "Angular", label:"Angular" },
    { src: "./assets/img-skills/logo-vue.png", alt: "Vue", label:"Vue" },
    { src: "./assets/img-skills/icon-nodejs.e9fdb7cb.svg", alt: "Node.js", label:"Node.js" },
    { src: "./assets/img-skills/icon-javascript.d5945e90.svg", alt: "JavaScript", label:"JavaScript" },
    { src: "./assets/img-skills/icon-typescript.0f2fa2a9.svg", alt: "TypeScript", label:"TypeScript" }
  ];

}
