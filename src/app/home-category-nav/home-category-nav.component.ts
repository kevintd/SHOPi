import { expandCollapse } from './home-category-nav.component.animations';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-home-category-nav',
  templateUrl: './home-category-nav.component.html',
  styleUrls: ['./home-category-nav.component.scss'],
  animations: [expandCollapse]
})

export class HomeCategoryNavComponent implements OnInit {
  private menuParts = {
    clothing: {
      isInHeader: false,
      isInContent: false
    },
    shoes: {
      isInHeader: false,
      isInContent: false
    },
    sport: {
      isInHeader: false,
      isInContent: false
    },
    accessoriesAndBags: {
      isInHeader: false,
      isInContent: false
    }
  }

  constructor() {

  }

  ngOnInit() {
  }

  enterHeader(type) {
    switch (type) {
      case "clothing":
        this.menuParts.clothing.isInHeader = true;
        break;
      case "shoes":
        this.menuParts.shoes.isInHeader = true;
        break;
      case "sport":
        this.menuParts.sport.isInHeader = true;
        break;
      case "accessoriesAndBags":
        this.menuParts.accessoriesAndBags.isInHeader = true;
        break;
    }
  }

  enterContent(type) {
    switch (type) {
      case "clothing":
        this.menuParts.clothing.isInContent = true;
        break;
      case "shoes":
        this.menuParts.shoes.isInContent = true;
        break;
      case "sport":
        this.menuParts.sport.isInContent = true;
        break;
      case "accessoriesAndBags":
        this.menuParts.accessoriesAndBags.isInContent = true;
        break;
    }
  }

  leaveHeader(type) {
    switch (type) {
      case "clothing":
        this.menuParts.clothing.isInHeader = false;
        break;
      case "shoes":
        this.menuParts.shoes.isInHeader = false;
        break;
      case "sport":
        this.menuParts.sport.isInHeader = false;
        break;
      case "accessoriesAndBags":
        this.menuParts.accessoriesAndBags.isInHeader = false;
        break;
    }
  }

  leaveContent(type) {
    switch (type) {
      case "clothing":
        this.menuParts.clothing.isInContent = false;
        break;
      case "shoes":
        this.menuParts.shoes.isInContent = false;
        break;
      case "sport":
        this.menuParts.sport.isInContent = false;
        break;
      case "accessoriesAndBags":
        this.menuParts.accessoriesAndBags.isInContent = false;
        break;
    }
  }

  validateAnimationState(type) {
    switch (type) {
      case "clothing":
        if (this.menuParts.clothing.isInHeader || this.menuParts.clothing.isInContent) return 'expanded'
        if (!this.menuParts.clothing.isInHeader && !this.menuParts.clothing.isInContent) return 'collapsed'
        break;
      case "shoes":
        if (this.menuParts.shoes.isInHeader || this.menuParts.shoes.isInContent) return 'expanded'
        if (!this.menuParts.shoes.isInHeader && !this.menuParts.shoes.isInContent) return 'collapsed'
        break;
      case "sport":
        if (this.menuParts.sport.isInHeader || this.menuParts.sport.isInContent) return 'expanded'
        if (!this.menuParts.sport.isInHeader && !this.menuParts.sport.isInContent) return 'collapsed'
        break;
      case "accessoriesAndBags":
        if (this.menuParts.accessoriesAndBags.isInHeader || this.menuParts.accessoriesAndBags.isInContent) return 'expanded'
        if (!this.menuParts.accessoriesAndBags.isInHeader && !this.menuParts.accessoriesAndBags.isInContent) return 'collapsed'
        break;
    }
  }

}
