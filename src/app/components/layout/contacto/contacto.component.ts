import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactoComponent {

  correo: string = "cangoc180@gmail.com"
  celular: string = '+57 3177179661'
  lk: string = 'https://www.linkedin.com/in/carlos-andres-gomez-cadavid-053510159/'


}
