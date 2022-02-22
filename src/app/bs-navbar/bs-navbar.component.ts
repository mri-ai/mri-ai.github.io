import {Component, EventEmitter, OnInit} from '@angular/core';
import {ShareServiceService} from "../share-service.service";

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  public isOverlayDisplayed: EventEmitter<boolean> = new EventEmitter<boolean>(true);
  public val = true;

  constructor(private shareService: ShareServiceService) { }

  ngOnInit(): void {
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];

    toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
    });
  }
  getOverlayDisplay(): string{
    console.log('isdisplayed: ', this.isOverlayDisplayed);
    if (this.isOverlayDisplayed){
      return 'flex;';
    }
    else {
      return 'none;';
    }
  }

  clickBurger() {
    this.shareService.isBurgerClicked = !this.shareService.isBurgerClicked;
  }
  getBurgerStatus(){
    return this.shareService.isBurgerClicked;
  }

  isSmallWindow() {
    var w = window.innerWidth;
    return w < 800;
  }
}
