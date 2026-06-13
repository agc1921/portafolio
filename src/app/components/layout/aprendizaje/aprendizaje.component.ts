import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-aprendizaje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aprendizaje.component.html',
  styleUrl: './aprendizaje.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AprendizajeComponent {
  public cursos = [
    {
      src: './assets/img-aprendizaje/diplomado-web.png',
      alt: 'diplomado',
      url: 'https://www.credly.com/badges/7e554b14-73f1-42b7-914b-19adc10aca13/linked_in_profile',
      descripcion: `Fundamentos de Desarrollo Web, construcción de
                    interfaces web utilizando HTML5, CSS, CSS Grid y
                    Bootstrap, aplicación de principios de maquetación,
                    diseño responsivo, prototipado web y desarrollo de
                    habilidades profesionales como trabajo en equipo,
                    resolución de problemas, pensamiento crítico,
                    comunicación efectiva y adaptación al cambio.`,
    },
    {
      src: './assets/img-aprendizaje/curso-angular-pro.png',
      alt: 'angular',
      url: 'https://www.udemy.com/certificate/UC-7eda49ac-c515-4c95-84b2-e08a4bbad939/',
      descripcion: `Angular Avanzado, desarrollo de aplicaciones
                    modernas utilizando Signals y arquitectura Zoneless,
                    optimización para SEO, implementación de
                    internacionalización (i18n) y creación y distribución
                    de paquetes NPM reutilizables.`,
    },
    {
      src: './assets/img-aprendizaje/curso-nest.png',
      alt: 'nest',
      url: 'https://www.udemy.com/certificate/UC-2e6b76bc-3ecd-431d-a82d-05d40fe4eb9c/',
      descripcion: `Desarrollo Backend con NestJS, creación de APIs
                    RESTful robustas y seguras utilizando NestJS,
                    TypeScript y Node.js, integrando bases de datos SQL
                    y NoSQL, WebSockets, validación de datos y
                    componentes avanzados del framework como
                    Guards, Interceptors, Pipes, Controllers, Services,
                    Modules y Middlewares.`,
    },
    {
      src: './assets/img-aprendizaje/curso-net-core.png',
      alt: '.net',
      url: 'https://www.udemy.com/certificate/UC-450764e5-6dec-4d7a-ade5-83cf7bd5ab0a/',
      descripcion: `Creación de APIs RESTful escalables utilizando
                    ASP.NET Core, Entity Framework Core y SQL
                    Server, implementando autenticación JWT,
                    autorización por roles, patrones de diseño,
                    paginación, versionado y despliegue en entornos
                    productivos.`,
    },
    {
      src: './assets/img-aprendizaje/curso-angular.jpg',
      alt: 'angular',
      url: 'https://www.udemy.com/certificate/UC-9b657733-577d-4913-a452-f39c2b72da78/',
      descripcion: `Frontend con Angular, creación de aplicaciones web
                    escalables utilizando Angular y TypeScript, aplicando
                    buenas prácticas de desarrollo, arquitectura basada
                    en componentes, integración de librerías de terceros
                    y estándares modernos para aplicaciones
                    empresariales.`,
    },
    {
      src: './assets/img-aprendizaje/curso-vibe-coding.png',
      alt: 'vibe-coding',
      url: 'https://www.udemy.com/certificate/UC-60df346b-5280-4133-ba2c-647b819844cf/',
      descripcion: `Uso de herramientas de inteligencia artificial para
                    acelerar el desarrollo de aplicaciones con Supabase,
                    autenticación segura, Git, Vercel y buenas prácticas
                    de arquitectura y seguridad.`,
    },
    {
      src: './assets/img-aprendizaje/curso-prompts.png',
      alt: 'prompts',
      url: 'https://www.udemy.com/certificate/UC-ca6f2049-872d-4730-921a-cf95496b9679/',
      descripcion: `Diseño y optimización de instrucciones para obtener
                    resultados precisos en generación de código, análisis de
                    información, automatización de tareas y creación de
                    contenido con herramientas de inteligencia artificial.`,
    },
    {
      src: './assets/img-aprendizaje/curso-node.jpg',
      alt: 'node',
      url: 'https://www.udemy.com/certificate/UC-c8202d7d-bc43-4ea7-8330-b7449ea331ad/',
      descripcion: `Desarrollo Backend con Node.js, creación de servidores y
                    servicios REST, implementación de autenticación con
                    JSON Web Tokens (JWT), gestión de archivos, desarrollo
                    de aplicaciones en tiempo real con WebSockets,
                    automatización mediante aplicaciones de consola y
                    despliegue de aplicaciones en entornos productivos.`,
    },
    {
      src: './assets/img-aprendizaje/curso-solid.jpg',
      alt: 'solid',
      url: 'https://www.udemy.com/certificate/UC-fcbb0ed5-0177-4450-a5cd-0a1756a61f09/',
      descripcion: `Principios SOLID y Clean Code, aplicación de buenas
                    prácticas de desarrollo para escribir código limpio,
                    mantenible y escalable, identificación y prevención de
                    deuda técnica, detección de code smells y mejora
                    continua de la calidad del software.`,
    },
    {
      src: './assets/img-aprendizaje/curso-ts.jpg',
      alt: 'ts',
      url: 'https://www.udemy.com/certificate/UC-4b2b242a-8820-4f11-a127-d467c3327620/',
      descripcion: `TypeScript, desarrollo de aplicaciones con tipado
                    estático, modularización de código mediante
                    importación de módulos, aplicación de buenas prácticas
                    de programación y mejora de la mantenibilidad,
                    escalabilidad y robustez de proyectos web.`,
    },
    {
      src: './assets/img-aprendizaje/curso-vue.jpg',
      alt: 'vue',
      url: 'https://www.udemy.com/certificate/UC-985d702b-4ff6-4104-9472-566094afef07/',
      descripcion: `Desarrollo Frontend con Vue, creación de aplicaciones
                    web modernas utilizando Vue 3, Composition API,
                    TypeScript, Vue Router y Pinia, aplicando
                    modularización, reutilización de código, pruebas
                    unitarias con Vitest y optimización del desarrollo con
                    Vite.`,
    },
  ];
}
