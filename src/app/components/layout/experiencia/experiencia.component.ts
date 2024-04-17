import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienciaComponent { }
