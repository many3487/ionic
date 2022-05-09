import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Mi perfil', url: '/perfil', icon: 'person' },
    { title: 'Experiencia', url: '/experiencia', icon: 'extension-puzzle' },
    { title: 'Educación', url: '/educacion', icon: 'book' },
    { title: 'Contacto', url: '/contacto', icon: 'call' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
