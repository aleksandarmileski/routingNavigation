import {Component, OnInit, HostBinding} from '@angular/core';
import {slideInDownAnimation} from "../../animations";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  templateUrl: './compose-message.component.html',
  styles: [':host { position: relative; bottom: 10%; }'],
  animations: [slideInDownAnimation]
})
export class ComposeMessageComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  details: string;
  sending: boolean = false;

  constructor(private router: Router) {
  }

  send() {
    this.sending = true;
    this.details = 'Sending Message...';
    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{outlets: {popup: null}}]);
  }
}
