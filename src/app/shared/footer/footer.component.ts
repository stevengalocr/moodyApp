import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class FooterComponent implements OnInit, OnDestroy {
  activeRoute: string = '';
  private routes = new Map([
    ['/home', 'home'],
    ['/tips', 'tips'],
    ['/lugares', 'lugares'],
    ['/recordatorios', 'recordatorios'],
    ['/feedback', 'feedback']
  ]);

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const url = event.url;
      this.activeRoute = this.routes.get(url) || '';
    });
  }

  ngOnDestroy() {
    // No hay nada que limpiar en este caso
  }
}
