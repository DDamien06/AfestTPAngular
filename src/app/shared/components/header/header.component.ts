import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { NavComponent } from "../nav/nav.component";
import { NgIf } from '@angular/common';
import { PageListBooksComponent } from "../../../books/pages/page-list-books/page-list-books.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [NgIf, MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule, MatSidenavModule, NavComponent, PageListBooksComponent]
})
export class HeaderComponent {

 isMenuOpen: boolean = false;

  infoMenu(): string {
    if (this.isMenuOpen) {
      return 'Masquer le Menu';
    }
    else {
      return 'Afficher le Menu';
    }
  }

  wrapMenu():void{
    this.isMenuOpen=!this.isMenuOpen
  }

  }


